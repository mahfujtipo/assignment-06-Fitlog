"use client";

import { FiBookmark } from "react-icons/fi";
import { useContext } from "react";
import { toast } from "react-toastify";

import { Workout } from "@/type/Datatype";
import { Fitcontext } from "@/context/context";

type SaveButtonProps = {
  workout: Workout;
};

export default function SaveButton({ workout }: SaveButtonProps) {
  const context = useContext(Fitcontext);

  if (!context) {
    throw new Error("SaveButton must be used inside ContextProvider");
  }

  const { save, setsave } = context;

  const handleSave = () => {
    const alreadySaved = save.some((item) => item.id === workout.id);

    if (alreadySaved) {
      toast.error("Workout is already saved.");
      return;
    }

    setsave((previous) => [...previous, workout]);

    toast.success("Workout saved for later.");
  };

  return (
    <button
      type="button"
      onClick={handleSave}
      className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#b7ff00] bg-transparent px-5 py-3 text-sm font-bold text-[#b7ff00] transition hover:bg-[#1b2708] sm:flex-1"
    >
      <FiBookmark className="h-4 w-4" />

      <span>Save for later</span>
    </button>
  );
}
