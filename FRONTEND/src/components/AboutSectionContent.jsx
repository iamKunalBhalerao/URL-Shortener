import React from "react";
import OverallButton from "./OverallButton";

const AboutSectionContent = ({ heading, subHeading, btnText, to }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">{heading}</h2>
        <p className="text-md font-normal text-zinc-500">{subHeading}</p>
        <div className="buttons">
          <OverallButton btnText={btnText} to={to} />
        </div>
      </div>
    </>
  );
};

export default AboutSectionContent;
