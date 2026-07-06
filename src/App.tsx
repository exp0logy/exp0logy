import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
