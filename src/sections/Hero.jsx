import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";
import gsap from "gsap";

const stats = [
  { label: "Leaderboard Users", end: 80 },
  { label: "Daily Requests", end: 5000 },
  { label: "Extension Downloads", end: 160 },
  { label: "Languages Supported", end: 750 },
];

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      });
    }, containerRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12 gap-12 font-display"
    >
      <img
        src="/logo-1.png"
        className="w-48 sm:w-60 md:w-72 fade-up"
        alt="Logo"
      />

      <div className="flex gap-0.5">
        {/* <span className="text-sm font-display text-amber-100">Hey Anon,</span> */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center bg-gradient-to-r from-gray-800 via-gray-500 to-zinc-200 bg-clip-text text-transparent leading-tight fade-up">
          Are You Locked In?
        </h1>
      </div>

      <a href="https://areyoulocked.in/" target="_blank" className="fade-up">
        <button className="relative inline-flex w-42 h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex tracking-widest  h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-lg font-display font-medium text-white backdrop-blur-3xl">
            Lock In
          </span>
        </button>
      </a>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl px-4 fade-up">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 rounded-lg p-6 flex flex-col items-center justify-center shadow-md hover:scale-[1.02] transition-all"
          >
            <div className="text-3xl md:text-4xl font-bold">
              <CountUp end={stat.end} duration={2} />+
            </div>
            <div className="mt-2 text-sm uppercase tracking-wider text-zinc-300 text-center">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
