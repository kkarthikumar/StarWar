import React, { memo, useState } from "react";

import LoginComponent from "./Login.component";
import * as LoginActionCreators from "./../../store/actions/login.action";

import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { compose } from "redux";

// import * as actions from '..';

const LoginContainer = props => {
  const {
    isLoggedInError,
    actions: { onValidateUser },
    isLoggedIn,
    history
  } = props;
  return (
    <LoginComponent
      isLoggedIn={isLoggedIn}
      onValidateUser={onValidateUser}
      isLoggedInError={isLoggedInError}
      history={history}
    />
  );
};

const mapStateToProps = state => {
  return {
    isLoggedInError: state.app.isLoggedInError,
    isLoggedIn: state.app.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: { ...bindActionCreators(LoginActionCreators, dispatch) }
  };
};

LoginContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  classes: PropTypes.object,
  isLoggedInError: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(LoginContainer));
