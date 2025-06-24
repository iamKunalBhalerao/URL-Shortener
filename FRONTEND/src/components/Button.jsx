import React from "react";
import { Link } from "react-router-dom";

const Button = ({ type, label, onClick, disabled  }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className="w-full bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
    >
      {label}
    </button>
  );
};

export default Button;
