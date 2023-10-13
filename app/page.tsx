import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
