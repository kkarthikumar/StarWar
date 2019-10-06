import searchPlanets from "./../../api/search";
import { actionTypes } from "./actionTypes";
import { checkSearchTimes } from "./../../utilities";
import { VALID_UNTIL } from "../../constants";
export const searchReset = () => {
  return {
    type: actionTypes.search.SEARCH_PLANETS_RESET
  };
};

export const planetListReset = () => {
  return {
    type: actionTypes.search.SEARCH_PLANETS_LIST_RESET
  };
};

const onSearchInitiate = () => {
  return {
    type: actionTypes.search.SEARCH_PLANETS_INITIATE
  };
};

const onSearchFailure = () => {
  return {
    type: actionTypes.search.SEARCH_PLANETS_FAILURE
  };
};

const onSearchSuccess = payload => {
  return {
    type: actionTypes.search.SEARCH_PLANETS_SUCCESS,
    payload
  };
};

export const onSearchPlanets = (search, currentUser) => {
  return (dispatch, getState) => {
    const {
      search: { searchTimeStamp, searchTimes }
    } = getState();

    //If search value cleared then reset the planet lists
    if (search === "") {
      dispatch(planetListReset());
      return;
    }

    // only Luke can search 15 times in a minute so we need to validate.
    if (
      currentUser.userName !== "Luke Skywalker" &&
      !checkSearchTimes(searchTimes, searchTimeStamp)
    ) {
      dispatch(searchReset());

      //Reset the maxsearch list lock after 1 minute
      setTimeout(
        () => dispatch(planetListReset()),
        searchTimeStamp + VALID_UNTIL - new Date().getTime()
      );
      return;
    }

    dispatch(onSearchInitiate());
    searchPlanets(search)
      .then(response => {
        dispatch(onSearchSuccess(response));
      })
      .catch(e => {
        dispatch(onSearchFailure());
      });
  };
};
