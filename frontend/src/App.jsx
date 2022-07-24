import "./App.css";
import React from "react";
import LandingPage from "./pages/landingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import SearchResults from "./pages/searchResults/SearchResults";
import Header from "./components/header/Header";
import DiseasePage from "./pages/diseasePage/DiseasePage";
import DoctorRegisterPage from "./pages/doctorRegisterPage/DoctorRestisterPage";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  return (
    <div id="App" className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/disease" element={<DiseasePage />} />
          <Route path="/doctorReg" element={<DoctorRegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
