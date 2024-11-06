"use client";

export default function error({ reset }) {
  return (
    <div className="text-5xl pt-40 justify-center justify-items-center center-content items-center">
      <h2>You are unable to perform this action without signing in.</h2>
      <div className="pt-20">
        <a
          onClick={() => reset()}
          href="#_"
          className="text-3xl px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-red-50 text-red-600 inline-block"
        >
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 group-hover:h-full opacity-90"></span>
          <span className="relative group-hover:text-white">Go Back</span>
        </a>
      </div>
    </div>
  );
}
