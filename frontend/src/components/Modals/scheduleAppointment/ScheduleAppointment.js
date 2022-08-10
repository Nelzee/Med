import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { approveAppointment } from "../../../actions/approveAppointmentActions";
import { APPROVE_APPOINTMENT_CLEAR } from "../../../constants/approveAppointmentsConstants";
import "./ScheduleAppointment.css";

const times = [
  { value: "08:00", label: "08:00" },
  { value: "08:30", label: "08:30" },
  { value: "09:00", label: "09:00" },
  { value: "09:30", label: "09:30" },
  { value: "10:00", label: "10:00" },
  { value: "10:30", label: "10:30" },
  { value: "11:00", label: "11:00" },
  { value: "11:30", label: "11:30" },
  { value: "12:00", label: "12:00" },
  { value: "12:30", label: "12:30" },
  { value: "14:00", label: "14:00" },
  { value: "14:30", label: "14:30" },
  { value: "15:00", label: "15:00" },
  { value: "15:30", label: "15:30" },
  { value: "16:00", label: "16:00" },
  { value: "16:30", label: "16:30" },
];

const ScheduleAppointment = ({ toggle, appointment }) => {
  const dispatch = useDispatch();

  const approveAppointmentState = useSelector(
    (state) => state.approveAppointment
  );
  const { response, error, loading } = approveAppointmentState;

  const [appointmentUpdate, setAppointmentUpdate] = useState({
    id: appointment._id,
    date: new Date(),
    time: times[0].value,
  });

  const handleDate = (e) => {
    setAppointmentUpdate((dateTime) => {
      return { ...dateTime, date: e };
    });
  };

  const handleClose = () => {
    toggle(false);
    dispatch({ type: APPROVE_APPOINTMENT_CLEAR });
  };

  const handleTime = (e) => {
    setAppointmentUpdate((dateTime) => {
      return { ...dateTime, time: e.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(approveAppointment(appointmentUpdate));
    console.log(approveAppointmentState);
  };

  return (
    <div className="modalBackground">
      <form className="scheduleForm" onSubmit={handleSubmit}>
        <div className="scheduleFormHeader">
          <div>
            {loading && <h2>loading</h2>}
            {response && <h2>{response.message}</h2>}
            {error && <h2>{error.message}</h2>}
            <h2>Set schedule</h2>
          </div>
          <span onClick={handleClose}>X</span>
        </div>
        <div className="scheduleContainer">
          <DatePicker selected={appointmentUpdate.date} onChange={handleDate} />
          <Select
            onChange={handleTime}
            options={times}
            defaultValue={times[0]}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ScheduleAppointment;
