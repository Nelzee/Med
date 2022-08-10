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
