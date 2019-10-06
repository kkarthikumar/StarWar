import { VALID_UNTIL, NUMBER_OF_SEARCHES } from "../constants";
import some from "lodash/some";

export const checkifValid = searchTimeStamp => {
  return new Date().getTime() - searchTimeStamp <= VALID_UNTIL;
};

export const checkSearchTimes = (searchTimes, searchTimeStamp) => {
  if (searchTimes === 0) {
    return true;
  }
  // If number of searches more than 15 and time with in 1 minute retrun true
  if (searchTimes < NUMBER_OF_SEARCHES && checkifValid(searchTimeStamp)) {
    return true;
  }

  return false;
};

//Validate the user
export const validateUser = (results, user) => {
  return some(results, userResult => {
    return (
      userResult.name === user.userName &&
      userResult.birth_year === user.password
    );
  });
};
