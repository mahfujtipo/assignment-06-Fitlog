const Loading = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0c0e] text-white">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[#292c32] border-t-[#b7ff00]" />

        <p className="mt-4 text-sm text-[#858a94]">Loading workouts…</p>
      </div>
    </main>
  );
};

export default Loading;
