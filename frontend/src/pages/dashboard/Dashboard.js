import React, { useState } from "react";
import OrganDonor from "../../components/Modals/organDonor/OrganDonor";
import "./Dashboard.css";

const Dashboard = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="dashBoardContainer">
        <div className="dashContainer appointments">appointments</div>
        <div className="dashContainer organ">
          organ
          <button onClick={() => setModal(true)}>post</button>
        </div>
      </div>
      {modal ? <OrganDonor toggle={setModal} /> : ""}
    </>
  );
};

export default Dashboard;
