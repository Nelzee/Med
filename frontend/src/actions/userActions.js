import axios from "../api/axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";

export const login = (credentials) => async (dispcth) => {
  try {
    dispcth({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { credentials },
      config
    );

    dispcth({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispcth({
      type: USER_LOGIN_FAIL,
      payload:
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message,
    });
  }
};

export const register = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post("/api/users", { credentials }, config);

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message,
    });
  }
};
export const logout = (e) => async (dispcth) => {
  dispcth({ type: USER_LOGOUT });
};
