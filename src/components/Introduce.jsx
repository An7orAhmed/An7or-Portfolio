import { FaArrowDown, FaHome, FaBusinessTime } from "react-icons/fa";

function Introduce() {
  return (
    <section id="introduce">
      <div data-aos="fade-left" className="card flex-row items-center gap-3 glass rounded-full py-2 px-10 w-fit uppercase">
        <FaHome></FaHome>
        <a href="#introduce">introduce</a>
      </div>
      <h1 data-aos="fade-left" className="text-5xl lg:text-8xl py-12 font-light tracking-wider">Hi from <span
        className="text-secondary">Antor</span>,<br></br>A Bangladeshi<br></br> Software Engineer</h1>
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
      <div className="flex gap-6 pt-6 w-full justify-center lg:justify-start">
        <a href="https://drive.google.com/file/d/1j7fDhmbYtoLaEo5vKNlUUvVlU9X2l9H6/view?usp=sharing" className="btn bg-primary px-10 lg:px-16 text-white hover:text-primary mt-3 rounded-full">
          Download CV
        </a>
        <button className="btn bg-primary text-white hover:text-primary mt-3 rounded-full px-10 lg:px-16">
          <FaBusinessTime></FaBusinessTime>HIRE ME
        </button>
      </div>
    </section>
  );
}

export default Introduce;