import axios from "../api/axios";
import {
  APPROVE_APPOINTMENT_FAIL,
  APPROVE_APPOINTMENT_REQUEST,
  APPROVE_APPOINTMENT_SUCCESS,
} from "../constants/approveAppointmentsConstants";

export const approveAppointment = (appointment) => async (dispatch) => {
  const { id, time, date } = appointment;
  try {
    dispatch({ type: APPROVE_APPOINTMENT_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `/api/appointments/${id}`,
      { time, date },
      config
    );
    dispatch({ type: APPROVE_APPOINTMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: APPROVE_APPOINTMENT_FAIL,
      payload:
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message,
    });
  }
};
