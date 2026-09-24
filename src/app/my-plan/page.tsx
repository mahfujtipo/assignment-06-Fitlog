"use client";

import React, { useContext } from "react";
import { Fitcontext } from "@/context/context";

const Page = () => {
  const context = useContext(Fitcontext);

  if (!context) {
    throw new Error("Page must be used inside ContextProvider");
  }

  const { addplan, save } = context;

  return (
    <main className="min-h-screen bg-[#0b0c0e] px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="text-2xl font-extrabold uppercase sm:text-3xl">
          My Plan
        </h1>

        <p className="mt-2 text-sm text-[#858a94]">
          Your workout plan is empty.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
          <div className="rounded-xl border border-[#292c32] bg-[#15171c] p-5">
            <p className="text-sm text-[#858a94]">Todays Plan</p>

            <p className="mt-2 text-3xl font-extrabold text-[#b7ff00]">
              {addplan.length}
            </p>
          </div>

          <div className="rounded-xl border border-[#292c32] bg-[#15171c] p-5">
            <p className="text-sm text-[#858a94]">Saved</p>

            <p className="mt-2 text-3xl font-extrabold text-[#b7ff00]">
              {save.length}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
