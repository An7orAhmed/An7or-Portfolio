import { FaHome, FaUser, FaBriefcase, FaLayerGroup, FaEnvelope } from "react-icons/fa";
import {BiSolidMessageAlt} from "react-icons/bi";
import {GiSkills} from "react-icons/gi";
import {PiCertificateFill} from "react-icons/pi";

function Rightbar() {
  return (
    <div className="fixed hidden lg:flex flex-col gap-4 border-2 p-5 border-gray-700 top-1/2 -translate-y-1/2 right-14 rounded-full">
      <div className="tooltip tooltip-left" data-tip="Introduce">
        <a href="#introduce"><FaHome className="text-xl"></FaHome></a>
      </div>
      <div className="tooltip tooltip-left" data-tip="About">
        <a href="#about"><FaUser className="text-xl"></FaUser></a>
      </div>
      <div className="tooltip tooltip-left" data-tip="Resume">
        <a href="#resume"><FaBriefcase className="text-xl"></FaBriefcase></a>
      </div>
      <div className="tooltip tooltip-left" data-tip="Services">
        <a href="#services"><FaLayerGroup className="text-xl"></FaLayerGroup></a>
      </div>
      <div className="tooltip tooltip-left" data-tip="Skills">
        <a href="#skills"><GiSkills className="text-xl"></GiSkills></a>
      </div>
      <div className="tooltip tooltip-left" data-tip="Portfolio">
        <a href="#portfolio"><PiCertificateFill className="text-xl"></PiCertificateFill></a>
      </div>
      <div className="tooltip tooltip-left" data-tip="Testimonials">
        <a href="#testimonials"><BiSolidMessageAlt className="text-xl"></BiSolidMessageAlt></a>
      </div>
      <div className="tooltip tooltip-left" data-tip="Contact">
        <a href="#contact"><FaEnvelope className="text-xl"></FaEnvelope></a>
      </div>
    </div>
  );
}

export default Rightbar;