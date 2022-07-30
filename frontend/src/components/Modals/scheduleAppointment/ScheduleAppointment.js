import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { approveAppointment } from "../../../actions/appointmentActions";
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

  const handleTime = (e) => {
    setAppointmentUpdate((dateTime) => {
      return { ...dateTime, time: e.value };
    });
  };
  const handleSubmit = (e) => {
    dispatch(approveAppointment(appointmentUpdate));
    e.preventDefault();
  };

  return (
    <div className="modalBackground">
      <form className="scheduleForm" onSubmit={handleSubmit}>
        <div className="scheduleFormHeader">
          <h2>Set schedule</h2>
          <span onClick={() => toggle(false)}>X</span>
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
