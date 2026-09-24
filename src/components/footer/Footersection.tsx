import React from "react";
import Image from "next/image";
import { MdCopyright } from "react-icons/md";

import logo from "../../assets/logo.png";

const Footersection = () => {
  return (
    <footer className="border-t border-[#292c32] bg-[#0b0c0e]">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-5 px-5 py-7 sm:px-8 md:flex-row lg:px-10">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="FitLog logo"
            className="h-8 w-auto object-contain"
          />

          <span className="text-[17px] font-extrabold tracking-tight text-white">
            FITLOG
          </span>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center gap-1 text-center md:items-end md:text-right">
          <div className="flex items-center gap-1.5 text-[11px] text-[#858a94]">
            <MdCopyright className="h-3 w-3" />

            <span>2026 FitLog — Workout Library</span>
          </div>

          <p className="text-[10px] text-[#626770]">Train hard, log honest.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footersection;
