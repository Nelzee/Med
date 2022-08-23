import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OrganDonor from "../../components/Modals/organDonor/OrganDonor";
import Appointments from "../../components/Modals/makeAppointment/Appointments";
import "./Dashboard.css";
import axios from "../../api/axios";
import ScheduleAppointment from "../../components/Modals/scheduleAppointment/ScheduleAppointment";
import ScheduleAppointment1 from "../../components/Modals/scheduleAppointment/ScheduleAppointment1";

const Dashboard = () => {
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { response, loading, error } = userLogin;

  const [organs, setOrgans] = useState(false);
  const [appointmentsModal, showAppointmentModel] = useState(false);
  const [scheduleAppointmentModal, setScheduleAppointmentModal] =
    useState(false);
  const [appointments, setAppointments] = useState([]);
  const [appointment, setAppointment] = useState("");

  const handleSchedule = (e, appointment) => {
    setAppointment(appointment);
    setScheduleAppointmentModal(true);
  };

  useEffect(() => {
    const getAppointments = async () => {
      const { data } = await axios.get(
        `/api/appointments/appointment/${response._id}`
      );
      setAppointments(data);
    };
    getAppointments();
  }, []);

  useEffect(() => {
    if (!response) {
      navigate("/");
    }
  }, [response]);

  return (
    <div className="dashboardPage">
      {response?.role === "doctor" ? (
        <div className="dashBoardContainer">
          <div className="dashContainer">
            <h3>Appointments</h3>
            <div className="appointmentList">
              <>
                {appointments.map((appointment) => {
                  return (
                    <div className="appointment">
                      <div className="appointment_details">
                        <h3>{appointment.user.firstName}</h3>
                        <p>{appointment.details}</p>
                      </div>
                      <div className="appointment_schelude_toggle">
                        <ScheduleAppointment1
                          appointmentDetails={appointment}
                        />
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          </div>
        </div>
      ) : (
        <div className="dashBoardContainer">
          <div className="dashContainer appointments">
            <h2>Appointments</h2>
            <p>Request or view the appointements </p>
            <div className="botton_container">
              <button onClick={() => showAppointmentModel(true)}>
                View Appointments
              </button>
              <button onClick={() => showAppointmentModel(true)}>
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

      {organs && <OrganDonor toggle={setOrgans} />}
      {scheduleAppointmentModal && (
        <ScheduleAppointment
          toggle={setScheduleAppointmentModal}
          appointment={appointment}
        />
      )}
      {appointmentsModal && <Appointments toggle={showAppointmentModel} />}
    </div>
  );
};

export default Dashboard;
