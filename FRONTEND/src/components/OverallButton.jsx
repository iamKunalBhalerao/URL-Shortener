import { useNavigate } from "@tanstack/react-router";
import React from "react";

const OverallButton = ({ btnText, to }) => {
  const navigate = useNavigate();
  const goto = (to) => {
    navigate({ to: to });
  };
  return (
    <>
      <button
        onClick={() => goto(to)}
        className="flex items-center justify-center gap-2 px-4 py-2 cursor-pointer text-white bg-zinc-900 hover:bg-black rounded-lg"
      >
        {btnText}
      </button>
    </>
  );
};

export default OverallButton;
