import React from "react";
import Client from "./components/Client";
import AddUser from "./components/AddUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CvDistribution from "./components/CvDistribution";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Client />} />
        <Route path="/users" element={<AddUser />} />
        <Route path="/cv-distribution" element={<CvDistribution />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
