import { useNavigate } from "@tanstack/react-router";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  const navigate = useNavigate();

  const goto = (to) => {
    navigate({ to: to });
  };

  return (
    <>
      <div className="w-full h-20 bg-zinc-800 flex items-center justify-center">
        <div className="w-7xl flex justify-between">
          <h2 className="text-3xl text-white font-medium font-stretch-extra-condensed">
            SHORTIVE
          </h2>
          <div className="socials flex items-center justify-center gap-6 text-white">
            <FaLinkedin
              className="text-2xl cursor-pointer"
              onClick={() => goto("https://www.linkedin.com/in/kunalbhalerao/")}
            />
            <RiInstagramFill
              className="text-2xl cursor-pointer"
              onClick={() => goto("https://www.instagram.com/kunalbhaleraoo/")}
            />
            <BsTwitterX
              className="text-2xl cursor-pointer"
              onClick={() => goto("https://x.com/KUNAL_BHALERAO_")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
