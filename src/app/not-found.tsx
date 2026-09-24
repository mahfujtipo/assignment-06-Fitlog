import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0c0e] px-5 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-[#b7ff00]">404</h1>

        <h2 className="mt-4 text-2xl font-bold">Page Not Found</h2>

        <p className="mt-2 text-sm text-[#858a94]">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-[#b7ff00] px-6 py-3 text-sm font-bold text-black"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
