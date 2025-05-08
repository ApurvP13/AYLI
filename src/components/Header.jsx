import React from "react";

const Header = () => {
  return (
    <header className="border-b-2 border-dashed border-slate-300 w-full bg-black px-6 py-4 flex justify-between items-center">
      <div className="text-white font-mono text-xl tracking-tight">
        areyoulocked.in
      </div>
      <a
        href="https://accounts.areyoulocked.in/sign-in?redirect_url=https%3A%2F%2Fareyoulocked.in%2F"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="border-2 border-amber-100 relative px-5 py-2 rounded-full text-white font-medium bg-black z-0 overflow-hidden">
          Log in
        </button>
      </a>
    </header>
  );
};

export default Header;
