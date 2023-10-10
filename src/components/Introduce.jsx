import { FaArrowDown, FaHome } from "react-icons/fa";

function Introduce() {
  return (
    <section id="introduce">
      <div data-aos="fade-left" className="card flex-row items-center gap-3 glass rounded-full py-2 px-10 w-fit uppercase">
        <FaHome></FaHome>
        <a href="#introduce">introduce</a>
      </div>
      <h1 data-aos="fade-left" className="text-5xl lg:text-8xl py-12 font-light tracking-wider">Hi from <span
        className="text-secondary">Antor</span>,<br></br>Software Engineer<br></br>and Developer</h1>
      <p data-aos="fade-up" className="text-gray-400 tracking-wider leading-relaxed">I develop and code beautifully simple things and i love
        what i do.<br></br>Just simple like that!</p>
      <div data-aos="fade-right" className="flex justify-end">
        <div className="p-3 border-gray-700 border-2 rounded-full animate-bounce">
          <a href="#portfolio">
            <FaArrowDown className="absolute text-7xl left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></FaArrowDown>
          </a>
          <img src="images/round-text.png" alt="" className="animate-spin-slow"></img>
        </div>
      </div>
      <div className="flex gap-20 text-gray-400">
        <h3 data-aos="zoom-out" className="leading-loose"><span className="text-7xl text-secondary">5+</span><br></br><br></br>
          YEARS OF<br></br>
          EXPERIENCE
        </h3>
        <h3 data-aos="zoom-out" className="leading-loose"><span className="text-7xl text-secondary">100+</span><br></br><br></br>
          PROJECTS COMPLETED ON<br></br>
          10+ COUNTRIES
        </h3>
      </div>
    </section>
  );
}

export default Introduce;