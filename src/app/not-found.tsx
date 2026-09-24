"use client";

import Link from "next/link";
import { FiArrowLeft, FiHome, FiSearch } from "react-icons/fi";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0c0e] px-5 py-20 text-white">
      <div className="w-full max-w-2xl text-center">
        <div className="relative mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full border border-[#292c32] bg-[#15171c] sm:h-48 sm:w-48">
          <div className="absolute inset-3 rounded-full border border-dashed border-[#b7ff00]/40" />

          <span className="text-6xl font-black tracking-[-0.08em] text-[#b7ff00] sm:text-7xl">
            404
          </span>
        </div>

        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b7ff00]">
          Workout Not Found
        </p>

        <h1 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
          This page missed a rep.
        </h1>

        <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-[#858a94]">
          The page you are looking for does not exist or may have been moved.
          Return to FitLog and choose another workout.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#b7ff00] px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-black transition hover:bg-[#c8ff33] sm:w-auto"
          >
            <FiHome className="h-4 w-4" />
            Back to Main Page
          </Link>

          <Link
            href="/#library"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#292c32] bg-[#15171c] px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-white transition hover:border-[#b7ff00] hover:text-[#b7ff00] sm:w-auto"
          >
            <FiSearch className="h-4 w-4" />
            Browse Workouts
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#292c32] px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-[#858a94] transition hover:border-white hover:text-white sm:w-auto"
          >
            <FiArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>

        <div className="mt-12 border-t border-[#292c32] pt-6">
          <p className="text-xs font-bold tracking-[0.2em] text-white">
            FIT<span className="text-[#b7ff00]">LOG</span>
          </p>

          <p className="mt-2 text-[10px] text-[#5f636c]">
            Train with intent. Log every set.
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
