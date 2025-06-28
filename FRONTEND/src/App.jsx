import React from "react";
import Navbar from "./components/Navbar.jsx";
import { Outlet } from "@tanstack/react-router";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
