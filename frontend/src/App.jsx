import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { listDiseases } from "./actions/diseaseActions";
import LandingPage from "./pages/landingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

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
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
