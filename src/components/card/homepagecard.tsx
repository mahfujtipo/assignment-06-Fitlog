import Image from "next/image";
import Link from "next/link";
import { FiClock, FiStar } from "react-icons/fi";
import { BsFire } from "react-icons/bs";

import { Workout } from "@/type/Datatype";

type HomepageCardProps = {
  workout: Workout;
};

const HomepageCard = ({ workout }: HomepageCardProps) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block cursor-pointer"
    >
      <article className="overflow-hidden rounded-xl border border-[#292c32] bg-[#15171c] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#b7ff00]">
        <div className="relative aspect-[1.95/1] w-full overflow-hidden bg-[#202329]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          {/* Muscle Groups */}
          <div className="mb-3 flex flex-wrap gap-1.5">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#b7ff00] px-2.5 py-1 text-[9px] font-extrabold uppercase leading-none text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h3 className="text-[13px] font-extrabold uppercase tracking-wide text-white">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="mt-1 text-[10px] text-[#747983]">{workout.equipment}</p>

          <div className="my-4 h-px bg-[#24272d]" />

          {/* Workout Stats */}
          <div className="flex items-center justify-between text-[10px] text-[#858a94]">
            {/* Duration */}
            <span className="flex items-center gap-1">
              <FiClock className="h-3.5 w-3.5 text-[#b7ff00]" />
              <span>{workout.duration} min</span>
            </span>

            {/* Calories */}
            <span className="flex items-center gap-1">
              <BsFire className="h-3.5 w-3.5 text-[#b7ff00]" />
              <span>{workout.caloriesBurned} kcal</span>
            </span>

            {/* Rating */}
            <span className="flex items-center gap-1">
              <FiStar className="h-3.5 w-3.5 text-[#b7ff00]" />
              <span>{workout.rating}</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default HomepageCard;
