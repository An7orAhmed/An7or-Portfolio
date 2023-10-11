import { FaHome, FaUser, FaBriefcase, FaLayerGroup, FaEnvelope } from "react-icons/fa";
import { BiSolidMessageAlt } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { PiCertificateFill } from "react-icons/pi";
import { Link } from "react-scroll";
import { useState } from "react";

function Rightbar() {
  const [color, setColor] = useState({
    introduce: "text-secondary",
    about: "text-gray-500",
    resume: "text-gray-500",
    services: "text-gray-500",
    skills: "text-gray-500",
    portfolio: "text-gray-500",
    testimonials: "text-gray-500",
    contact: "text-gray-500",
  });

  const handleSet = (id, e) => {
    if (id === e.id) setColor(prev => ({ ...prev, [id]: "text-secondary" }));
  };

  const handleUnset = (id, e) => {
    if (id === e.id) setColor(prev => ({ ...prev, [id]: "text-gray-500" }));
  };

  const attr = {
    spy: true,
    smooth: true,
    onSetActive: handleSet,
    onSetInactive: handleUnset
  }

  return (
    <div className="fixed hidden lg:flex flex-col gap-4 border-2 p-5 border-gray-700 top-1/2 -translate-y-1/2 right-14 rounded-full">
      <div className="tooltip tooltip-left" data-tip="Introduce">
        <Link to="introduce" {...attr}><FaHome className={color.introduce + " text-xl"}></FaHome></Link>
      </div>
      <div className="tooltip tooltip-left" data-tip="About">
        <Link to="about" {...attr}><FaUser className={color.about + " text-xl"}></FaUser></Link>
      </div>
      <div className="tooltip tooltip-left" data-tip="Resume">
        <Link to="resume" {...attr}><FaBriefcase className={color.resume + " text-xl"}></FaBriefcase></Link>
      </div>
      <div className="tooltip tooltip-left" data-tip="Services">
        <Link to="services" {...attr}><FaLayerGroup className={color.services + " text-xl"}></FaLayerGroup></Link>
      </div>
      <div className="tooltip tooltip-left" data-tip="Skills">
        <Link to="skills" {...attr}><GiSkills className={color.skills + " text-xl"}></GiSkills></Link>
      </div>
      <div className="tooltip tooltip-left" data-tip="Portfolio">
        <Link to="portfolio" {...attr}><PiCertificateFill className={color.portfolio + " text-xl"}></PiCertificateFill></Link>
      </div>
      <div className="tooltip tooltip-left" data-tip="Testimonials">
        <Link to="testimonials" {...attr}><BiSolidMessageAlt className={color.testimonials + " text-xl"}></BiSolidMessageAlt></Link>
      </div>
      <div className="tooltip tooltip-left" data-tip="Contact">
        <Link to="contact" {...attr}><FaEnvelope className={color.contact + " text-xl"}></FaEnvelope></Link>
      </div>
    </div>
  );
}

export default Rightbar;