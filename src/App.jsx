import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <div className="front_page_container">
          <Navbar />
          <Hero />
        </div>
        <Projects />
        <Skills />
        <Contacts />
        <Footer />
    </>
  );
}

export default App;
