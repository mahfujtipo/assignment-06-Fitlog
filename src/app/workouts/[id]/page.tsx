import Image from "next/image";
import { notFound } from "next/navigation";
import { Workout } from "@/type/Datatype";
import AddButton from "@/components/buttons/addbutton";
import SaveButton from "@/components/buttons/savebutton";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  if (!response.ok) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b0c0e] px-5 text-white">
        <h1 className="text-2xl font-bold">Failed to load workout</h1>
      </main>
    );
  }

  const workouts: Workout[] = await response.json();

  const workout = workouts.find((item) => item.id === Number(id));

  if (!workout) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0b0c0e] px-4 py-8 text-white sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[1200px]">
        <section className="grid overflow-hidden rounded-2xl border border-[#292c32] bg-[#15171c] lg:grid-cols-[540px_1fr]">
          {/* LEFT SIDE - IMAGE */}
          <div className="relative h-[400px] w-full sm:h-[520px] lg:h-[680px] lg:w-[540px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-cover"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
            {/* Workout Name */}
            <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#858a94]">
              {workout.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-5 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full border border-[#b7ff00] bg-[#b7ff00] px-4 py-1.5 text-xs font-bold uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Workout Stats */}
            <div className="mt-6 space-y-2">
              {/* Equipment */}
              <div className="flex items-center justify-between rounded-md bg-[#292c32] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#858a94]">
                  Equipment
                </p>

                <p className="text-sm font-semibold text-white">
                  {workout.equipment}
                </p>
              </div>

              {/* Difficulty */}
              <div className="flex items-center justify-between rounded-md bg-[#292c32] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#858a94]">
                  Difficulty
                </p>

                <p className="text-sm font-semibold text-white">
                  {workout.difficulty}
                </p>
              </div>

              {/* Sets */}
              <div className="flex items-center justify-between rounded-md bg-[#292c32] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#858a94]">
                  Sets
                </p>

                <p className="text-sm font-semibold text-white">
                  {workout.sets}
                </p>
              </div>

              {/* Reps */}
              <div className="flex items-center justify-between rounded-md bg-[#292c32] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#858a94]">
                  Reps
                </p>

                <p className="text-sm font-semibold text-white">
                  {workout.reps}
                </p>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between rounded-md bg-[#292c32] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#858a94]">
                  Duration
                </p>

                <p className="text-sm font-semibold text-white">
                  {workout.duration} min
                </p>
              </div>

              {/* Calories */}
              <div className="flex items-center justify-between rounded-md bg-[#292c32] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#858a94]">
                  Calories
                </p>

                <p className="text-sm font-semibold text-white">
                  {workout.caloriesBurned} kcal
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between rounded-md bg-[#292c32] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#858a94]">
                  Rating
                </p>

                <p className="text-sm font-semibold text-[#b7ff00]">
                  ★ {workout.rating}
                </p>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-6">
              <h2 className="text-lg font-extrabold uppercase text-white">
                Instructions
              </h2>

              <ol className="mt-4 space-y-3">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm leading-6 text-[#9a9ea7]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#b7ff00] text-xs font-bold text-black">
                      {index + 1}
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <AddButton workout={workout} />

              <SaveButton workout={workout} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
