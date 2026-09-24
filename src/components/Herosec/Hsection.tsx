import Image from "next/image";
import Link from "next/link";
import { FiArrowDown } from "react-icons/fi";

import banner from "../../assets/banner.png";

const Hsection = () => {
  return (
    <section className="bg-[#0b0c0e] px-4 py-6 text-white sm:px-6 sm:py-8 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden rounded-2xl border border-[#292c32] bg-[#15171c]">
          {/* Main Hero Content */}
          <div className="relative z-10 flex min-h-[520px] flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 lg:min-h-[500px] lg:px-14 lg:py-16 xl:px-16">
            {/* Text Content */}
            <div className="max-w-[600px]">
              {/* Small Label */}
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#b7ff00] sm:text-xs">
                Workout Library
              </p>

              {/* Heading */}
              <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:max-w-[600px] xl:text-[60px]">
                Train with intent.
                <br />
                Log every set.
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-[500px] text-sm leading-6 text-[#9297a2] sm:text-[15px]">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                it into today&apos;s plan, and watch the week&apos;s work add
                up.
              </p>

              {/* CTA */}
              <Link
                href="#library"
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#b7ff00] px-6 py-3 text-[11px] font-extrabold uppercase tracking-wide text-black transition-all duration-200 hover:bg-[#c8ff33] hover:shadow-[0_0_25px_rgba(183,255,0,0.2)] active:scale-95"
              >
                <span>Browse Workouts</span>
                <FiArrowDown className="h-4 w-4" />
              </Link>
            </div>

            {/* Mobile / Tablet Banner */}
            <div className="relative mt-10 h-[240px] w-full md:h-[280px] lg:hidden">
              <Image
                src={banner}
                alt="FitLog workout illustration"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain object-center"
              />
            </div>
          </div>

          {/* Desktop Banner */}
          <div className="absolute bottom-0 right-0 hidden h-full w-[46%] lg:block xl:w-[44%]">
            <Image
              src={banner}
              alt="FitLog workout illustration"
              fill
              priority
              sizes="(max-width: 1280px) 46vw, 44vw"
              className="object-contain object-bottom"
            />
          </div>

          {/* Background Glow */}
          <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#b7ff00]/[0.025] blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-[#b7ff00]/[0.015] blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Hsection;
