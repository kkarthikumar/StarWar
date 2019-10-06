import getUser from "./../../api/login";
import { actionTypes } from "./actionTypes";
import { validateUser } from "./../../utilities";

const loginFailure = () => {
  return {
    type: actionTypes.app.LOGIN_FAILURE
  };
};

const logout = () => {
  return {
    type: actionTypes.app.LOGOUT_SUCCESS
  };
};

const loginSucess = payload => {
  return {
    type: actionTypes.app.LOGIN_SUCCESS,
    payload
  };
};

const validateUserResult = (results, user, dispatch) => {
  if (validateUser(results, user)) {
    dispatch(loginSucess(user));
  } else {
    dispatch(loginFailure());
  }
};

export const onValidateUser = user => {
  return (dispatch, getState) => {
    getUser(user.userName)
      .then(response => {
        validateUserResult(response, user, dispatch);
      })
      .catch(e => {
        dispatch(loginFailure());
      });
  };
};

export const onLogoutUser = () => {
  return dispatch => {
    dispatch(logout());
  };
};
