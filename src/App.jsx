import { useEffect } from "react";
import reactLogo from "./assets/react.svg";

import Hero from "./sections/Hero";
import Header from "./components/Header";
import Features from "./sections/Features";
import Footer from "./components/Footer";
import Extensions from "./components/Extensions";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (x) =>
        x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2, // smooth easing
      smooth: true,
      direction: "vertical", // or 'horizontal'
      gestureDirection: "vertical",
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Extensions />
      <Footer />
    </>
  );
}

export default App;
