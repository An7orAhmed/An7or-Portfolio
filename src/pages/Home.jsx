import { useEffect } from "react";
import About from "../components/About";
import BioInfo from "../components/BioInfo";
import Education from "../components/Education";
import Introduce from "../components/Introduce";
import Rightbar from "../components/Rightbar";
import Skills from "../components/Skills";
import Specialization from './../components/Specialization';
import "aos/dist/aos.css";
import Aos from "aos";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonial";
import Contact from "../components/Contact";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="bg-background text-white">
      <BioInfo></BioInfo>
      <Rightbar></Rightbar>
      <main className="container mx-auto pl-4 lg:pl-96 pr-4 lg:pr-56 py-16">
        <Introduce></Introduce>
        <About></About>
        <Education></Education>
        <Specialization></Specialization>
        <Skills></Skills>
        <Portfolio></Portfolio>
        <Testimonials></Testimonials>
        <Contact></Contact> 
      </main>
    </div>
  );
}

export default Home;