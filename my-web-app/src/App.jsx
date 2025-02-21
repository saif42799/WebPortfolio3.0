import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  // this is for the scrolling smoothness of web page 
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, 
      smooth: true,
      direction: "vertical",
      gestureOrientation: "vertical",
      smoothTouch: false,
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
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
