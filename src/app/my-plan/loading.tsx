import React from "react";

const Loading = () => {
  return (
    <main className="min-h-screen bg-[#0b0c0e] px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto flex min-h-[500px] max-w-[1200px] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[#292c32] border-t-[#b7ff00]" />

          <p className="mt-4 text-sm text-[#858a94]">Loading workouts…</p>
        </div>
      </div>
    </main>
  );
};

export default Loading;
