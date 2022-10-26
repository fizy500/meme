import React from "react";
import Logo from "../Assets/Logo.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-5  bg-gradient-to-r from-[#672280] to-[#A626D3] text-white w-full top-0 left-0 fixed">
      <div className="flex space-x-2">
        <img src={Logo} alt="" />
        <h2 className="text-[20.75px] font-bold">Meme Generator</h2>
      </div>
    </header>
  );
}
