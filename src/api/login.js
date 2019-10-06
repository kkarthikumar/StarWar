import axios from "axios";
import * as API_CONSTANTS from "./../constants";

const getUser = async search => {
  try {
    const searchResponse = await axios.get(
      `${API_CONSTANTS.BASE_URL}${API_CONSTANTS.USER_API_URL}?search=${search}`
    );
    return searchResponse.data.results;
  } catch (e) {
    throw new Error(e);
  }
};

export default getUser;
