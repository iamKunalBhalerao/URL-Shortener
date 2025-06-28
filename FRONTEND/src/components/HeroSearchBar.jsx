import React from "react";

const HeroSearchBar = () => {
  return (
    <>
      <div className="rounded-xl mt-6 shadow-sm w-2xl flex bg-white p-2 border-1 border-zinc-100">
        <input
          type="text"
          className="p-2 w-full outline-none focus:outline-none"
          placeholder="Enter Your long URL here...."
        />
        <button className="p-2 px-3 gap-2 cursor-pointer rounded-lg shadow-lg flex bg-zinc-900 hover:bg-black text-white font-medium">
          <p>Short</p>
          <p>It</p>
        </button>
      </div>
    </>
  );
};

export default HeroSearchBar;
