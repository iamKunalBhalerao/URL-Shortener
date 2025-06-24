import React from "react";

const AuthHeading = ({ title }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-4">{title}</h1>
    </div>
  );
};

export default AuthHeading;
