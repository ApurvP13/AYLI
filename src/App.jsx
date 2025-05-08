import { useState } from "react";
import reactLogo from "./assets/react.svg";

import Hero from "./sections/Hero";
import Header from "./components/Header";
import Features from "./sections/Features";
import Footer from "./components/Footer";
import Extensions from "./components/Extensions";

function App() {
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
