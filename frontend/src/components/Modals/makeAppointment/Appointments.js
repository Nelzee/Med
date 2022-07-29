import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { makeAppointment } from "../../../actions/appointmentActions";
import axios from "../../../api/axios";
import "./Appointments.css";

const cities = [
  { value: "Harare", label: "Harare" },
  { value: "Bulawayo", label: "Bulawayo" },
  { value: "Chitungwiza", label: "Chitungwiza" },
  { value: "Mutare", label: "Mutare" },
  { value: "Gweru", label: "Gweru" },
  { value: "Kwekwe", label: "Kwekwe" },
  { value: "Kadoma", label: "Kadoma" },
  { value: "Masvingo", label: "Masvingo" },
  { value: "Chinhoyi", label: "Chinhoyi" },
  { value: "Marondera", label: "Marondera" },
  { value: "Bindura", label: "Bindura" },
  { value: "Hwange", label: "Hwange" },
  { value: "Beitbridge", label: "Beitbridge" },
  { value: "Zvishavane", label: "Zvishavane" },
  { value: "Victoria Falls", label: "Victoria Falls" },
  { value: "Redcliff", label: "Redcliff" },
  { value: "Chiredzi", label: "Chiredzi" },
  { value: "Gwanda", label: "Gwanda" },
  { value: "Lupane", label: "Lupane" },
];

const AppointmentsPage = ({ toggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [doctors, setDoctors] = useState([]);
  const [city, setCity] = useState(cities[0].value);
  const [appointment, setAppointment] = useState({
    userId: userInfo?._id,
    doctorId: "",
    details: "",
  });

  const handleChange = (e) => {
    setCity(e.value);
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/appointments/${city}`);
      setDoctors(
        data.map((d) => {
          return { ...d, selected: false };
        })
      );
    };

    fetching();
  }, [city]);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  });

  const handleClick = (e, i) => {
    e.preventDefault();
    setDoctors((prev) => {
      const nxt = prev.map((doc) => {
        return { ...doc, selected: false };
      });
      nxt[i].selected = true;
      setAppointment((app) => {
        return { ...app, doctorId: nxt[i]._id };
      });
      return nxt;
    });
  };

  const handleDetails = (e) => {
    setAppointment((app) => {
      return { ...app, details: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(appointment);
    dispatch(makeAppointment(appointment));
  };

  return (
    <div className="modalBackground">
      <form className="appointementsForm" onSubmit={handleSubmit}>
        <div className="appointmentsFormHeader">
          <h2>fill in details</h2>
          <span onClick={() => toggle(false)}>X</span>
        </div>
        <Select
          onChange={handleChange}
          options={cities}
          defaultValue={cities[0]}
        />
        <div className="appointementsFormInner">
          <div className="appointmentsInput">
            <div className="doctors">
              <input type="text" />
              <div className="doctorsResults">
                {doctors.map((doctor, i) => {
                  return (
                    <>
                      <h3>{doctor.firstName}</h3>
                      <button onClick={(e) => handleClick(e, i)}>
                        {doctor.selected ? "selected" : "select"}
                      </button>
                      <p>{doctor.idNumber}</p>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="symptoms">
          <input type="text" onChange={handleDetails} />
        </div>
        <button disabled={false}>Submit</button>
      </form>
    </div>
  );
};

export default AppointmentsPage;
