import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Pages/Users/Users"
import Employees from "./Pages/Employees/Employees"
import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="employees" element={<Employees />} />
      </Routes>
    </BrowserRouter>
  );
}
