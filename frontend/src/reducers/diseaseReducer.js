import {
  DISEASE_LIST_FAIL,
  DISEASE_LIST_REQUEST,
  DISEASE_LIST_SUCCESS,
} from "../constants/diseaseConstants";

export const diseaseReducer = (state = {}, action) => {
  switch (action.type) {
    case DISEASE_LIST_REQUEST:
      return { loading: true };
    case DISEASE_LIST_SUCCESS:
      return { loading: false, diseases: action.payload };
    case DISEASE_LIST_FAIL:
      return { loading: true, error: action.payload };
    default:
      return state;
  }
};
