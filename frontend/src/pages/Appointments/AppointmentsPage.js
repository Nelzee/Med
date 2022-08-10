import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAppointment } from "../../actions/reserveAppointmentActions";
import axios from "../../api/axios";
import "./AppointmentsPage.css";

const AppointmentsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [approvedAppointments, setApprovedAppointments] = useState([]);

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  useEffect(() => {
    const getAppointments = async () => {
      const { data } = await axios.get(
        `/api/appointments/approved/${userInfo._id}`
      );
      console.log(data);
      setApprovedAppointments(data);
    };
    getAppointments();
  }, []);

  const handleDelete = (id, e) => {
    dispatch(deleteAppointment(id));
  };
  return (
    <div className="appointmentsPage">
      appointments
      <div className="appointementsForm doctors">
        {approvedAppointments.map((ap) => {
          return (
            <div className="approvedAppointment">
              <div className="info">
                <h3>{ap.doctor.firstName}</h3>
                <p>{ap.time}</p>
                <p>{new Date(ap.date).getDate()}</p>
              </div>
              <div className="btn">
                <button onClick={(e) => handleDelete(ap._id, e)}>cancel</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppointmentsPage;
