import {
  APPROVE_APPOINTMENT_CLEAR,
  APPROVE_APPOINTMENT_FAIL,
  APPROVE_APPOINTMENT_REQUEST,
  APPROVE_APPOINTMENT_SUCCESS,
} from "../constants/approveAppointmentsConstants";

export const approveAppointmentReducer = (state = {}, action) => {
  switch (action.type) {
    case APPROVE_APPOINTMENT_REQUEST:
      return { loading: true };
    case APPROVE_APPOINTMENT_SUCCESS:
      return { loading: false, response: action.payload };
    case APPROVE_APPOINTMENT_FAIL:
      return { loading: false, error: action.payload };
    case APPROVE_APPOINTMENT_CLEAR:
      return {};
    default:
      return state;
  }
};
