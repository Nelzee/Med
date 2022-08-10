import axios from "../api/axios";
import {
  RESERVE_APPOINTMENT_FAIL,
  RESERVE_APPOINTMENT_REQUEST,
  RESERVE_APPOINTMENT_SUCCESS,
} from "../constants/reserveAppointmentConstants";

export const makeAppointment = (appointment) => async (dispatch) => {
  try {
    dispatch({ type: RESERVE_APPOINTMENT_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/appointments/appointments/",
      { appointment },
      config
    );
    dispatch({ type: RESERVE_APPOINTMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RESERVE_APPOINTMENT_FAIL,
      payload:
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message,
    });
  }
};

export const deleteAppointment = (id) => async (dispcth) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.delete(
      `/api/appointments/delete/${id}`,
      config
    );
  } catch (error) {
    console.log(error);
  }
};
