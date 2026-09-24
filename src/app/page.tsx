import HomepageCard from "@/components/card/homepagecard";
import Hsection from "@/components/Herosec/Hsection";
import { Workout } from "@/type/Datatype";

const getWorkouts = async (): Promise<Workout[]> => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
};

const Page = async () => {
  const workouts = await getWorkouts();

  return (
    <main className="min-h-screen bg-[#0b0c0e]">
      <Hsection />

      <section
        id="library"
        className="bg-[#0b0c0e] px-4 pb-10 pt-2 sm:px-6 lg:px-10 lg:pb-16"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-5">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
              The Library
            </h2>

            <p className="mt-1 text-[10px] text-[#858a94] sm:text-[11px]">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout) => (
              <HomepageCard key={workout.id} workout={workout} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
