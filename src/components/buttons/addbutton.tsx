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

    setaddplan((previous) => [...previous, workout]);

    toast.success("Workout added to today's plan.");
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#b7ff00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#c8ff33] sm:flex-1"
    >
      <FiArchive className="h-4 w-4" />

      <span>Add to todays plan</span>
    </button>
  );
}
