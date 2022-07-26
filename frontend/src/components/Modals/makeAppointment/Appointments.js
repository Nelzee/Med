import React, { useEffect, useState } from "react";
import Select from "react-select";
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

const DoctorRestisterPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [city, setCity] = useState(cities[0].value);

  const handleChange = (e) => {
    setCity(e.value);
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/appointments/${city}`);
      setDoctors(data);
    };

    fetching();
  }, [city]);

  const optionDoctors = doctors.map((doctor) => {
    return {
      value: doctor._id,
      label: `${doctor.firstName} ${doctor.lastName}`,
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(doctors);
  };

  return (
    <div className="modalBackground">
      <form className="appointementsForm" onSubmit={handleSubmit}>
        <Select
          onChange={handleChange}
          options={cities}
          defaultValue={cities[0]}
        />
        <Select options={optionDoctors} />
        <button disabled={false}>Submit</button>
      </form>
    </div>
  );
};

export default DoctorRestisterPage;
