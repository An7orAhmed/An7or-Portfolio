import { FaUser } from "react-icons/fa";

function About() {
  return (
    <section className="py-14 lg:py-20" id="about">
      <div data-aos="fade-left" className="card flex-row items-center gap-3 glass rounded-full py-2 px-10 w-fit uppercase">
        <FaUser></FaUser>
        <a href="#about">about</a>
      </div>
      <h1 data-aos="zoom-in-up" className="text-2xl lg:text-5xl py-12 font-light tracking-widest">Every great developer begin with<br></br>
        an even<span className="text-secondary"> better story</span></h1>
      <p data-aos="fade-up" className="text-justify text-gray-400 text-xl">I&apos;m a passionate programmer with over 5 years of freelancing and
        remote
        job experience specializing in Flutter development, Web development and Embedded systems.
        Experienced with all stages of the development cycle for dynamic projects. having an in-depth knowledge of
        technology and a strong background in management and leadership.
      </p>
    </section>
  );
}

export default About;