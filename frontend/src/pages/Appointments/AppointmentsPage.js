import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import axios from "../../api/axios";
import "./AppointmentsPage.css";

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

const AppointmentsPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [city, setCity] = useState(cities[0].value);

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

  const handleClick = (e, i) => {
    e.preventDefault();
    setDoctors((prev) => {
      const nxt = prev.map((doc) => {
        return { ...doc, selected: false };
      });
      nxt[i].selected = true;
      return nxt;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(doctors);
  };

  return (
    <div>
      <form className="appointementsForm" onSubmit={handleSubmit}>
        <h2>fill in details</h2>
        <div className="appointmentsInput">
          <Select
            onChange={handleChange}
            options={cities}
            defaultValue={cities[0]}
          />
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
          <div className="symptoms">
            <input type="text" />
          </div>
          <button disabled={false}>
            <Link to="/makeAppointment">Submit</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentsPage;
