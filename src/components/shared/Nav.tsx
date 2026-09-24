import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/logo.png";

const Nav = () => {
  return (
    <header className="h-[74px] border-b border-white/5 bg-[#0b0c0e] text-white">
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="FitLog logo"
            priority
            className="h-8 w-auto object-contain"
          />

          <span className="text-[17px] font-extrabold tracking-tight text-white">
            FITLOG
          </span>
        </div>

        <nav className="hidden items-center gap-2 md:flex">
          <Link
            href="#workouts"
            className="rounded-full bg-[#1b2708] px-5 py-2 text-xs font-semibold text-[#b7ff00] transition hover:bg-[#24350a]"
          >
            Workouts
          </Link>

          <Link
            href="#plan"
            className="rounded-full px-5 py-2 text-xs font-medium text-[#8c9099] transition hover:text-white"
          >
            My Plan
          </Link>
        </nav>

        <div className="flex items-center gap-5">
          <Link
            href="#plan"
            className="hidden items-center gap-2 text-xs sm:flex"
          >
            <span className="text-[#a1a5ad]">Plan</span>

            <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#b7ff00] px-1 text-[10px] font-bold text-black">
              0
            </span>
          </Link>

          
          <Link
            href="#saved"
            className="hidden items-center gap-2 text-xs sm:flex"
          >
            <span className="text-[#a1a5ad]">Saved</span>

            <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full border border-[#292c32] px-1 text-[10px] text-[#858991]">
              0
            </span>
          </Link>

          <div className="dropdown dropdown-end md:hidden">
            <button
              tabIndex={0}
              type="button"
              aria-label="Open navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#131519] text-white transition hover:border-white/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-3 w-48 rounded-xl border border-white/10 bg-[#15171b] p-2 shadow-xl"
            >
              <li>
                <Link href="#workouts" className="text-[#b7ff00]">
                  Workouts
                </Link>
              </li>

              <li>
                <Link href="#plan" className="text-[#a1a5ad]">
                  My Plan
                </Link>
              </li>

              <li>
                <Link href="#plan" className="text-[#a1a5ad]">
                  Plan
                  <span className="ml-auto rounded-full bg-[#b7ff00] px-2 text-[10px] font-bold text-black">
                    0
                  </span>
                </Link>
              </li>

              <li>
                <Link href="#saved" className="text-[#a1a5ad]">
                  Saved
                  <span className="ml-auto rounded-full border border-white/10 px-2 text-[10px]">
                    0
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
