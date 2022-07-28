import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OrganDonor from "../../components/Modals/organDonor/OrganDonor";
import Appointments from "../../components/Modals/makeAppointment/Appointments";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [organs, setOrgans] = useState(false);
  const [appointments, setAppointments] = useState(false);

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  return (
    <div className="dashboardPage">
      {userInfo?.role === "doctor" ? (
        <div className="dashBoardContainer">doctor</div>
      ) : (
        <div className="dashBoardContainer">
          <div className="dashContainer appointments">
            <h2>Appointments</h2>
            <p>Request or view the appointements </p>
            <div className="botton_container">
              <button onClick={() => setAppointments(true)}>
                View Appointments
              </button>
              <button onClick={() => setAppointments(true)}>
                Request Appointment
              </button>
            </div>
          </div>
          <div className="dashContainer organ">
            <h2>Organ Donations</h2>
            <p>Opt into the organ donation program</p>
            <div className="botton_container">
              <button onClick={() => setOrgans(true)}>View your list</button>
              <button onClick={() => setOrgans(true)}>
                volunteer an organ
              </button>
            </div>
          </div>
        </div>
      )}

      {organs ? <OrganDonor toggle={setOrgans} /> : ""}
      {appointments ? <Appointments toggle={setAppointments} /> : ""}
    </div>
  );
};

export default Dashboard;
