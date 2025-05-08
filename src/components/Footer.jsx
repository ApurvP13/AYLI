import React from "react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-6 py-8 flex flex-col md:flex-row items-center justify-between font-display border-t pr-6 border-zinc-800">
      {/* Left: Site Name + Rights */}
      <div className="text-center md:text-left text-sm text-zinc-400">
        <p className="font-semibold font-mono mb-2 tracking-widest text-white">
          areyoulocked.in
        </p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>

      {/* Right: Twitter Icon */}
      <a
        href="https://x.com/areyoulocked_in" // replace with your actual Twitter
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 md:mt-0 text-zinc-400 hover:text-white transition"
      >
        <FaXTwitter size={20} />
      </a>
    </footer>
  );
};

export default Footer;
