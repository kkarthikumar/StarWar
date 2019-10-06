import { actionTypes } from "./../actions/actionTypes";

const INITIAL_STATE = {
  isLoggedIn: false,
  currentUser: {},
  isLoggedInError: false
};

const appReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case actionTypes.app.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload,
        isLoggedInError: false
      };
    case actionTypes.app.LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        currentUSer: {},
        isLoggedInError: true
      };
    case actionTypes.app.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        currentUSer: {},
        isLoggedInError: false
      };
    default:
      return { ...state };
  }
};

export default appReducer;
