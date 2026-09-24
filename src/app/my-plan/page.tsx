"use client";

import React, { useContext, useMemo, useState } from "react";
import Link from "next/link";

import { Fitcontext } from "@/context/context";
import { Workout } from "@/type/Datatype";
import Plancard from "@/components/myplancard/plancard";

type TabType = "today" | "saved";
type SortType = "duration" | "caloriesBurned" | "rating";

const Page = () => {
  const context = useContext(Fitcontext);

  const [activeTab, setActiveTab] = useState<TabType>("today");
  const [sortBy, setSortBy] = useState<SortType>("duration");

  if (!context) {
    throw new Error("Page must be used inside ContextProvider");
  }

  const { addplan, setaddplan, save, setsave } = context;

  const currentWorkouts = activeTab === "today" ? addplan : save;

  const sortedWorkouts = useMemo(() => {
    return [...currentWorkouts].sort(
      (a: Workout, b: Workout) => b[sortBy] - a[sortBy],
    );
  }, [currentWorkouts, sortBy]);

  const totalMinutes = currentWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = currentWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const handleRemove = (id: number) => {
    if (activeTab === "today") {
      setaddplan((previous) => previous.filter((workout) => workout.id !== id));
    } else {
      setsave((previous) => previous.filter((workout) => workout.id !== id));
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0c0e] px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-extrabold uppercase sm:text-3xl">
            My Plan
          </h1>

          <p className="mt-2 text-sm text-[#858a94]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-1 overflow-hidden rounded-xl border border-[#292c32] bg-[#15171c] sm:grid-cols-3">
          <div className="border-b border-[#292c32] p-5 sm:border-b-0 sm:border-r">
            <p className="text-xs text-[#858a94]">Exercises</p>

            <p className="mt-1 text-3xl font-extrabold text-[#b7ff00]">
              {currentWorkouts.length}
            </p>
          </div>

          <div className="border-b border-[#292c32] p-5 sm:border-b-0 sm:border-r">
            <p className="text-xs text-[#858a94]">Minutes</p>

            <p className="mt-1 text-3xl font-extrabold text-white">
              {totalMinutes}
            </p>
          </div>

          <div className="p-5">
            <p className="text-xs text-[#858a94]">Calories</p>

            <p className="mt-1 text-3xl font-extrabold text-white">
              {totalCalories}
            </p>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Tabs */}
          <div className="tabs tabs-lift w-fit">
            <button
              type="button"
              onClick={() => setActiveTab("today")}
              className={`tab ${
                activeTab === "today"
                  ? "border-[#292c32] bg-[#15171c] text-white"
                  : "text-[#858a94]"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`tab ${
                activeTab === "saved"
                  ? "border-[#292c32] bg-[#15171c] text-white"
                  : "text-[#858a94]"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort */}
          <div className="flex shrink-0 items-center gap-2 whitespace-nowrap">
            <span className="text-xs text-[#858a94]">Sort By</span>

            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as SortType)}
              className="select select-sm w-auto border-[#292c32] bg-[#15171c] text-xs text-white outline-none"
            >
              <option value="duration">Duration</option>
              <option value="caloriesBurned">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Workout Cards */}
        {sortedWorkouts.length === 0 ? (
          <div className="mt-4 flex min-h-[240px] flex-col items-center justify-center rounded-xl border border-dashed border-[#292c32] px-5 text-center">
            <h2 className="text-lg font-extrabold uppercase">
              Nothing Here Yet
            </h2>

            <p className="mt-2 text-xs text-[#858a94]">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-5 rounded-full bg-[#b7ff00] px-6 py-2.5 text-xs font-bold text-black transition hover:bg-[#c8ff33]"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="mt-4 flex flex-col gap-3">
            {sortedWorkouts.map((workout) => (
              <Plancard
                key={workout.id}
                workout={workout}
                onRemove={handleRemove}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Page;
