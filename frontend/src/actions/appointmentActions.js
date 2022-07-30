import axios from "../api/axios";

export const makeAppointment = (appointment) => async (dispcth) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

export const approveAppointment = (appointment) => async (dispcth) => {
  const { id, time, date } = appointment;
  try {
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
  } catch (error) {
    console.log(error);
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
