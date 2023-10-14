import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="lg:px-[150px]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
