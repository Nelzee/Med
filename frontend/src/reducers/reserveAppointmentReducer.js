import {
  DELETE_APPOINTMENT_CLEAR,
  DELETE_APPOINTMENT_FAIL,
  DELETE_APPOINTMENT_REQUEST,
  DELETE_APPOINTMENT_SUCCESS,
} from "../constants/deleteAppointmentConstants";
import {
  RESERVE_APPOINTMENT_CLEAR,
  RESERVE_APPOINTMENT_FAIL,
  RESERVE_APPOINTMENT_REQUEST,
  RESERVE_APPOINTMENT_SUCCESS,
} from "../constants/reserveAppointmentConstants";

export const reserveAppointmentReducer = (state = {}, action) => {
  switch (action.type) {
    case RESERVE_APPOINTMENT_REQUEST:
      return { loading: true };
    case RESERVE_APPOINTMENT_SUCCESS:
      return { loading: false, response: action.payload };
    case RESERVE_APPOINTMENT_FAIL:
      return { loading: false, error: action.payload };
    case RESERVE_APPOINTMENT_CLEAR:
      return {};
    default:
      return state;
  }
};
export const deleteAppointmentReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_APPOINTMENT_REQUEST:
      return { loading: true };
    case DELETE_APPOINTMENT_SUCCESS:
      return { loading: false, response: action.payload };
    case DELETE_APPOINTMENT_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_APPOINTMENT_CLEAR:
      return {};
    default:
      return state;
  }
};
