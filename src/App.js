import Navbar from "./components/Navbar";
import "./components/style.css";
import Hero from "./components/Hero";
import Services from "./components/Services/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import ContactForm from "./components/Contact/ContactForm";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="boxed-page">
        <Navbar />
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Testimonials />
        <ContactForm />
        <Footer />
    </div>
  );
}

export default App;