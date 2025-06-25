import { Link, useNavigate } from "@tanstack/react-router";
import React from "react";

const BottomWarning = ({ title, buttontxt, to }) => {

  const navigate = useNavigate()

  return (
    <div className="flex justify-center items-center">
      <p className="text-sm font-normal text-zinc-500 text-center">{title}</p>
      <p onClick={() => navigate({to: to})} className="text-sm font-normal text-center text-blue-600 cursor-pointer">{buttontxt}</p>
    </div>
  );
};

export default BottomWarning;
