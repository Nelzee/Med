import axios from "../api/axios";
import {
  DISEASE_LIST_SUCCESS,
  DISEASE_LIST_FAIL,
  DISEASE_LIST_REQUEST,
} from "../constants/diseaseConstants";

export const listDiseases = (query) => async (dispatch) => {
  try {
    dispatch({ type: DISEASE_LIST_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post("/api/diseases", { query }, config);
    console.log(data);

    dispatch({
      type: DISEASE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DISEASE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
