/**
 * Action types dispatched throughout the app
 */
export const actionTypes = {
  app: {
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAILURE: "LOGIN_FAILURE",
    LOGOUT_SUCCESS: "LOGOUT_SUCCESS"
  },
  search: {
    SEARCH_PLANETS_INITIATE: "SEARCH_PLANETS_INITIATE",
    SEARCH_PLANETS_SUCCESS: "SEARCH_PLANETS_SUCCESS",
    SEARCH_PLANETS_RESET: "SEARCH_PLANETS_RESET",
    SEARCH_PLANETS_LIST_RESET: "SEARCH_PLANETS_LIST_RESET",
    SEARCH_PLANETS_FAILURE: "SEARCH_PLANETS_FAILURE"
  }
};
