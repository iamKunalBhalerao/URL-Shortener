import React from "react";
import AboutSectionContent from "./AboutSectionContent";

const AboutSectionleft = ({ img }) => {
  return (
    <>
      <div className="w-full flex justify-around">
        <div className="flex w-sm flex-col items-start justify-center">
          <AboutSectionContent
            heading={"Create Instant Short URL for your use."}
            subHeading={
              "Say goodbye to long, messy links. Instantly generate sleek, shareable URLs with just one click — no sign-up, no waiting, just fast and effortless shortening."
            }
            btnText={"Get Started"}
            to={"/signin"}
          />
        </div>
        <img src={img} alt="AboutImage" className="w-96 rounded-xl" />
      </div>
    </>
  );
};

export default AboutSectionleft;
