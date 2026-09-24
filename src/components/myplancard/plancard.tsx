"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiCheck, FiClock, FiStar } from "react-icons/fi";
import { BsFire } from "react-icons/bs";
import { toast } from "react-toastify";

import { Workout } from "@/type/Datatype";

type PlancardProps = {
  workout: Workout;
  onRemove: (id: number) => void;
};

const Plancard = ({ workout, onRemove }: PlancardProps) => {
  const [isDone, setIsDone] = useState(false);

  const handleRemove = () => {
    onRemove(workout.id);

    toast.error(`${workout.name} removed from your plan.`);
  };

  return (
    <div
      className={`flex flex-col gap-5 rounded-xl border bg-[#15171c] p-4 transition sm:flex-row sm:items-center ${
        isDone
          ? "border-[#b7ff00]/40 opacity-70"
          : "border-[#292c32] hover:border-[#b7ff00]/30"
      }`}
    >
      {/* Image */}
      <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-lg bg-[#101216] sm:h-28 sm:w-40">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Workout Information */}
      <div className="min-w-0 flex-1">
        <h2 className="truncate text-base font-bold text-white">
          {workout.name}
        </h2>

        <p className="mt-1 text-xs text-[#858a94]">
          Equipment: {workout.equipment}
        </p>

        {/* Workout Stats */}
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
          {/* Duration */}
          <div className="flex items-center gap-1.5 text-[#a1a5ad]">
            <FiClock className="h-3.5 w-3.5 text-[#b7ff00]" />
            <span>{workout.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1.5 text-[#a1a5ad]">
            <BsFire className="h-3.5 w-3.5 text-[#b7ff00]" />
            <span>{workout.caloriesBurned} calories</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5 text-[#a1a5ad]">
            <FiStar className="h-3.5 w-3.5 text-[#b7ff00]" />
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 flex-wrap items-center gap-2 sm:flex-col sm:items-stretch lg:flex-row">
        {/* View Details */}
        <Link
          href={`/workouts/${workout.id}`}
          className="flex items-center justify-center rounded-lg border border-[#292c32] px-4 py-2 text-xs font-semibold text-white transition hover:border-[#b7ff00] hover:text-[#b7ff00]"
        >
          View Details
        </Link>

        {/* Mark as Done */}
        <button
          type="button"
          onClick={() => setIsDone((previous) => !previous)}
          className={`flex items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold transition ${
            isDone
              ? "bg-[#1b2708] text-[#b7ff00]"
              : "bg-[#b7ff00] text-black hover:bg-[#c8ff33]"
          }`}
        >
          <FiCheck className="h-3.5 w-3.5" />

          {isDone ? "Completed" : "Mark as Done"}
        </button>

        {/* Remove */}
        <button
          type="button"
          onClick={handleRemove}
          aria-label={`Remove ${workout.name}`}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#292c32] text-lg font-medium text-[#858a94] transition hover:border-red-500/50 hover:text-red-400"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Plancard;
