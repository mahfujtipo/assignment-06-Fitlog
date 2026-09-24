"use client";

import { FiArchive, FiCheck } from "react-icons/fi";
import { useContext } from "react";
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

  const isAdded = addplan.some((item) => item.id === workout.id);

  const handleAdd = () => {
    setaddplan((previous) => {
      const alreadyAdded = previous.some((item) => item.id === workout.id);

      if (alreadyAdded) {
        return previous;
      }

      return [...previous, workout];
    });
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      disabled={isAdded}
      className={`flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-black transition sm:flex-1 ${
        isAdded
          ? "cursor-default bg-[#8fca00]"
          : "cursor-pointer bg-[#b7ff00] hover:bg-[#c8ff33]"
      }`}
    >
      {isAdded ? (
        <>
          <FiCheck className="h-4 w-4" />
          <span>Added</span>
        </>
      ) : (
        <>
          <FiArchive className="h-4 w-4" />
          <span>Add to todays plan</span>
        </>
      )}
    </button>
  );
}
