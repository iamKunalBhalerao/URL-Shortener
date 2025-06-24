import React from "react";

const AuthSubHeading = ({ title }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-md font-normal text-zinc-500 text-center mb-4">{title}</p>
    </div>
  );
};

export default AuthSubHeading;
