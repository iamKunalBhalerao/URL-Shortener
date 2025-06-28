import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";

const ShortUrlDialog = ({ children, onClose, isOpen }) => {
    if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-zinc-600/60 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md relative flex flex-col items-center justify-center">
          <button
            onClick={onClose}
            className="p-2 bg-zinc-100 self-start text-gray-900 rounded-xl hover:bg-gray-200 cursor-pointer"
          >
            <MdOutlineArrowBackIos className="text-xl" />
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default ShortUrlDialog;
