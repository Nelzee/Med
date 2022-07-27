import axios from "../api/axios";

export const makeAppointment = (appointment) => async (dispcth) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/appointments/appointment",
      { appointment },
      config
    );
  } catch (error) {
    console.log(error);
  }
};
