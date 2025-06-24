import React from "react";

const InputBox = ({ type, label, onChange, placeholder }) => {
  return (
    <div>
      <label className="block text-sm font-normal text-black">
        {label}
      </label>
      <input
      onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 bg-zinc-100 border-1 border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300"
        required
      />
    </div>
  );
};

export default InputBox;
