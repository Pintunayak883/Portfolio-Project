import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({ theme, toggleTheme }) => {
  return (
    <>
      <div className="flex items-center justify-between h-[80px] shadow-xl px-12">
        <div className="">
          <h1 className="text-2xl font-[montserrat] font-bold ">Pintu Nayak</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
