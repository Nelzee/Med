import { useEffect, useState } from "react";
import axios from "../../api/axios";
import "./OrganDonors.css";
const OrganDonors = () => {
  const [organDonors, setOrganDonors] = useState();

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.post(`/api/users/organdonors`);
      setOrganDonors(data);
    };

    fetching();
  }, []);

  console.log(organDonors);

  return (
    <div className="organDonorContainer">
      <div className="organDonors">
        <div className="organDonor">
          <h3>name</h3>
          <p>contact</p>
          <p>gender</p>
        </div>
        <div className="organDonor">
          <h3>name</h3>
          <p>contact</p>
          <p>gender</p>
        </div>
        <div className="organDonor">
          <h3>name</h3>
          <p>contact</p>
          <p>gender</p>
        </div>
        <div className="organDonor">
          <h3>name</h3>
          <p>contact</p>
          <p>gender</p>
        </div>
        <div className="organDonor">
          <h3>name</h3>
          <p>contact</p>
          <p>gender</p>
        </div>
        <div className="organDonor">
          <h3>name</h3>
          <p>contact</p>
          <p>gender</p>
        </div>
      </div>
    </div>
  );
};

export default OrganDonors;
