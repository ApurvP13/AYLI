import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Daily Leaderboards",
    subhead:
      "See where you rank every day and stay motivated to stay locked in.",
    image: "/lead.png",
  },
  {
    title: "Easy Installation",
    subhead:
      "Get started with just a few clicks — no technical skills required.",
    image: "/inst.png",
  },
  {
    title: "Automatic Language Detection",
    subhead:
      "We detect your and 750+ other coding language automatically and track progress instantly.",
    image: "/lang.png",
  },
];

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".feature-block").forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full font-display bg-black text-white py-20 px-4 sm:px-6 md:px-12"
    >
      <h2 className="text-4xl md:text-6xl bg-gradient-to-r font-display from-gray-800 via-gray-500 to-zinc-200 bg-clip-text text-transparent tracking-wider font-bold mb-16 text-center">
        Features
      </h2>

      <div className="flex flex-col gap-16">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="feature-block flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12"
          >
            {/* Image Box */}
            <div className="w-full md:w-1/2 bg-zinc-800 rounded-lg p-2 overflow-hidden shadow-md">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-60 sm:h-72 md:h-64 object-cover"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-zinc-400 text-base">{feature.subhead}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
