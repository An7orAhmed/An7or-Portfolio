import { FaFacebook, FaYoutube, FaGithub, FaLinkedin, FaCode, FaBusinessTime } from "react-icons/fa";

function BioInfo() {
  return (
    <div className="md:static lg:fixed card lg:max-w-sm lg:top-1/2 lg:-translate-y-1/2 mx-auto lg:ml-10 glass">
      <div className="flex justify-between p-4 text-right">
        <h1 className="text-4xl font-bold">Antor<sup className="text-2xl font-light"> Ⓐ</sup></h1>
        <p className="text-gray-400">Software Engineer<br></br>& Developer</p>
      </div>
      <figure><img src="/images/antorWebP.png" alt="Antor Ahmed" /></figure>
      <div className="card-body">
        <div className="text-center leading-7 text-xl font-light">
          Jurain, Railgate, Dhaka-1204, BD<br></br>
          <a href="mailto:antor.mee@gmail.com">antor.mee@gmail.com</a><br></br>
          <p className="text-gray-400 py-3 text-sm">© 2023 Antor Ahmed, All Rights Reserved</p>
        </div><br></br>
        <div className="card-actions flex flex-col justify-center items-center">
          <div className="flex flex-wrap w-full mx-auto justify-evenly">
            <a href="https://facebook.com/An7orAhmed">
              <div className="p-3 border-white hover:border-secondary border-2 rounded-full m-auto">
                <FaFacebook></FaFacebook>
              </div>
            </a>
            <a href="https://youtube.com/@An7orAhmed">
              <div className="p-3 border-white hover:border-secondary border-2 rounded-full m-auto">
                <FaYoutube></FaYoutube>
              </div>
            </a>
            <a href="https://github.com/An7orAhmed">
              <div className="p-3 border-white hover:border-secondary border-2 rounded-full m-auto">
                <FaGithub></FaGithub>
              </div>
            </a>
            <a href="https://linkedin.com/in/An7orAhmed">
              <div className="p-3 border-white hover:border-secondary border-2 rounded-full m-auto">
                <FaLinkedin></FaLinkedin>
              </div>
            </a>
            <a href="https://leetcode.com/An7orAhmed">
              <div className="p-3 border-white hover:border-secondary border-2 rounded-full m-auto">
                <FaCode></FaCode>
              </div>
            </a>
          </div><br></br>
          <div className="flex gap-4 w-full">
            <a href="https://drive.google.com/file/d/1j7fDhmbYtoLaEo5vKNlUUvVlU9X2l9H6/view?usp=sharing" className="btn flex-1 bg-primary text-white hover:text-primary mt-3 rounded-full">
              Download CV
            </a>
            <button className="btn flex-1 bg-primary text-white hover:text-primary mt-3 rounded-full">
              <FaBusinessTime></FaBusinessTime>HIRE ME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BioInfo;