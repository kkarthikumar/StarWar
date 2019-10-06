import { actionTypes } from "./../actions/actionTypes";
import * as SEARCH_CONSTANTS from "./../../constants";

const INITIAL_STATE = {
  planets: [],
  searchTimeStamp: "",
  searchTimes: 0,
  showLoader: false,
  isMaxSearchExeeded: false
};

const searchReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case actionTypes.search.SEARCH_PLANETS_INITIATE:
      return {
        ...state,
        searchTimeStamp:
          state.searchTimes === 0
            ? new Date().getTime()
            : state.searchTimeStamp,
        searchTimes: state.searchTimes + 1,
        showLoader: true,
        isMaxSearchExeeded: false
      };
    case actionTypes.search.SEARCH_PLANETS_SUCCESS:
      return {
        ...state,
        planets: action.payload,
        showLoader: false
      };
    case actionTypes.search.SEARCH_PLANETS_FAILURE:
      return {
        ...state,
        showLoader: false
      };
    case actionTypes.search.SEARCH_PLANETS_LIST_RESET:
      return {
        ...state,
        planets: [],
        isMaxSearchExeeded: false
      };
    case actionTypes.search.SEARCH_PLANETS_RESET:
      return {
        ...state,
        searchTimeStamp:
          new Date().getTime() - state.searchTimeStamp >
          SEARCH_CONSTANTS.VALID_UNTIL
            ? ""
            : state.searchTimeStamp,
        searchTimes:
          new Date().getTime() - state.searchTimeStamp >
          SEARCH_CONSTANTS.VALID_UNTIL
            ? 0
            : state.searchTimes,
        isMaxSearchExeeded: true
      };
    default:
      return { ...state };
  }
};

export default searchReducer;
