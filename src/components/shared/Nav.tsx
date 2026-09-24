"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "../../assets/logo.png";

const Nav = () => {
  const pathname = usePathname();

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

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            className={`rounded-full px-5 py-2 text-xs font-semibold transition ${
              pathname === "/"
                ? "bg-[#1b2708] text-[#b7ff00]"
                : "text-[#8c9099] hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-5 py-2 text-xs font-semibold transition ${
              pathname === "/my-plan"
                ? "bg-[#1b2708] text-[#b7ff00]"
                : "text-[#8c9099] hover:text-white"
            }`}
          >
            My plan
          </Link>
        </nav>

        <div className="flex items-center gap-5">
          {/* Plan */}
          <Link
            href="/my-plan"
            className="hidden items-center gap-2 text-xs sm:flex"
          >
            <span className="text-[#a1a5ad]">Plan</span>

            <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#b7ff00] px-1 text-[10px] font-bold text-black">
              0
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="hidden items-center gap-2 text-xs sm:flex"
          >
            <span className="text-[#a1a5ad]">Saved</span>

            <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full border border-[#292c32] px-1 text-[10px] text-[#858991]">
              0
            </span>
          </Link>

          {/* Mobile Menu */}
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
                <Link
                  href="/"
                  className={
                    pathname === "/" ? "text-[#b7ff00]" : "text-[#a1a5ad]"
                  }
                >
                  Workouts
                </Link>
              </li>

              <li>
                <Link
                  href="/my-plan"
                  className={
                    pathname === "/my-plan"
                      ? "text-[#b7ff00]"
                      : "text-[#a1a5ad]"
                  }
                >
                  My Plan
                </Link>
              </li>

              <li>
                <Link href="/my-plan" className="text-[#a1a5ad]">
                  Plan
                  <span className="ml-auto rounded-full bg-[#b7ff00] px-2 text-[10px] font-bold text-black">
                    0
                  </span>
                </Link>
              </li>

              <li>
                <Link href="/my-plan" className="text-[#a1a5ad]">
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
