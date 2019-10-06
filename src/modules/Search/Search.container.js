import React, { memo } from "react";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import Search from "./Search.component";
import * as SearchActionCreators from "./../../store/actions/search.action";
import * as LoginActionCreators from "./../../store/actions/login.action";

// import * as actions from '..';

const SearchContainer = props => {
  const {
    actions: { onSearchPlanets, onLogoutUser },
    planets,
    isMaxSearchExeeded,
    isLoggedIn,
    currentUser,
    history
  } = props;

  return (
    <Search
      onSearch={onSearchPlanets}
      isMaxSearchExeeded={isMaxSearchExeeded}
      planets={planets}
      isLoggedIn={isLoggedIn}
      onLogoutUser={onLogoutUser}
      currentUser={currentUser}
      history={history}
    />
  );
};

const mapStateToProps = state => {
  return {
    planets: state.search.planets,
    isMaxSearchExeeded: state.search.isMaxSearchExeeded,
    isLoggedIn: state.app.isLoggedIn,
    currentUser: state.app.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      ...bindActionCreators(SearchActionCreators, dispatch),
      ...bindActionCreators(LoginActionCreators, dispatch)
    }
  };
};

SearchContainer.propTypes = {
  actions: PropTypes.func.isRequired,
  planets: PropTypes.array,
  classes: PropTypes.object,
  isMaxSearchExeeded: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  currentUser: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(SearchContainer));
