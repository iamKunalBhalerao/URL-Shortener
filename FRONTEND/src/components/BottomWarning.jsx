import { Link } from "@tanstack/react-router";
import React from "react";

const BottomWarning = ({ title, buttontxt, to }) => {
  return (
    <div className="flex justify-center items-center">
      <p className="text-sm font-normal text-zinc-500 text-center">{title}</p>
      <Link to={to} className="text-sm font-normal text-center text-blue-600 cursor-pointer">{buttontxt}</Link>
    </div>
  );
};

export default BottomWarning;
