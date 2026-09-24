"use client";

import { FiArchive } from "react-icons/fi";
import { useContext } from "react";
import { toast } from "react-toastify";

import { Workout } from "@/type/Datatype";
import { Fitcontext } from "@/context/context";

type AddButtonProps = {
  workout: Workout;
};

export default function AddButton({ workout }: AddButtonProps) {
  const context = useContext(Fitcontext);

  if (!context) {
    throw new Error("AddButton must be used inside ContextProvider");
  }

  const { addplan, setaddplan } = context;

  const handleAdd = () => {
    const alreadyAdded = addplan.some((item) => item.id === workout.id);

    if (alreadyAdded) {
      toast.error("Workout is already in today's plan.");
      return;
    }

    // Allow adding normally until the plan reaches 5 workouts
    if (addplan.length >= 5) {
      toast.error("Today's plan can contain a maximum of 5 workouts.");
      return;
    }

    setaddplan((previous) => [...previous, workout]);

    toast.success("Workout added to today's plan.");
  };

  const planIsFull = addplan.length >= 5;

  return (
    <button
      type="button"
      onClick={handleAdd}
      disabled={planIsFull}
      className={`flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition sm:flex-1 ${
        planIsFull
          ? "cursor-not-allowed bg-[#292c32] text-[#858a94]"
          : "cursor-pointer bg-[#b7ff00] text-black hover:bg-[#c8ff33]"
      }`}
    >
      <FiArchive className="h-4 w-4" />

      <span>Add to todays plan</span>
    </button>
  );
}
``;
