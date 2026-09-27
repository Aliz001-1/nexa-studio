import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import Projects from "./components/projects";
import About from "./components/About";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
  const revealElements = document.querySelectorAll(
    ".section, .trusted-by, .footer"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });

  return () => observer.disconnect();
}, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <Projects />
        <About />
        <Process />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default App;