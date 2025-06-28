import React from "react";
import AboutSectionContent from "./AboutSectionContent";

const AboutSecctionRight = ({ img }) => {
  return (
    <>
      <div className="w-full flex justify-around">
        <img src={img} alt="AboutImage" className="w-96 rounded-xl" />
        <div className="flex w-sm flex-col items-start justify-center">
          <AboutSectionContent
            heading={"Turn Every Link into a Scannable QR Code."}
            subHeading={
              "Easily create high-quality QR codes for any shortened URL — available instantly once you're signed in. Perfect for mobile sharing, print, and offline access."
            }
            btnText={"Sign In"}
            to={"/signin"}
          />
        </div>
      </div>
    </>
  );
};

export default AboutSecctionRight;
