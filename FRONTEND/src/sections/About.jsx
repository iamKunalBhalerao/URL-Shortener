import React from "react";
import AboutSecctionRight from "../components/AboutSecctionRight";
import AboutSectionleft from "../components/AboutSectionleft";

const About = () => {
  return (
    <>
      <div className="w-7xl flex flex-col gap-25">
        <AboutSectionleft
          img={"https://shadcnblocks.com/images/block/placeholder-1.svg"}
        />
        <AboutSecctionRight
          img={"https://shadcnblocks.com/images/block/placeholder-1.svg"}
        />
      </div>
    </>
  );
};

export default About;
