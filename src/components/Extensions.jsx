import React from "react";
import { VscVscode } from "react-icons/vsc";
import { SiNeovim } from "react-icons/si";

const Extensions = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-4 sm:px-6 md:px-12 font-display">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-gray-800 via-gray-500 to-zinc-200 bg-clip-text text-transparent">
          Download the Extension
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://github.com/voltycodes/areyoulockedin.nvim"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-zinc-700 hover:border-white px-6 py-3 rounded-full transition"
          >
            <SiNeovim size={24} />
            <span>NeoVim</span>
          </a>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=SatyanshMittal.locked-in-vs-extension"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-zinc-700 hover:border-white px-6 py-3 rounded-full transition"
          >
            <VscVscode size={24} />
            <span>VSCode</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Extensions;
