import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { listDiseases } from "./actions/diseaseActions";
import LandingPage from "./pages/landingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listDiseases());
  }, [dispatch]);

  return (
    <div id="App" className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
