import { BrowserRouter, Route, Router } from "react-router-dom";
import "./App.css";
import NavBar from "./component/NavBar/NavBar.jsx";
import HeroSection from "./component/HeroSection/heroSection.jsx";
import About from "./component/About/about.jsx";
import Skills from "./component/skills/skills.jsx";
import Experience from "./component/Experience/experience.jsx";
import Footer from "./component/Footer.jsx";
import Contact from "./component/contact/contact.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <HeroSection />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
