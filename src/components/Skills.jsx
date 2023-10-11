import { useEffect, useState } from "react";
import { GiSkills } from "react-icons/gi";
import PropTypes from 'prop-types';

function Skills() {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    fetch("/skills.json")
      .then(data => data.json())
      .then(data => setSkills(data))
  }, []);

  return (
    <section id="skills" className="py-14 lg:py-20">
      <div data-aos="fade-left" className="card flex-row items-center gap-3 glass rounded-full py-2 px-10 w-fit uppercase">
        <GiSkills></GiSkills>
        <a href="#skills">my skills</a>
      </div>
      <h1 data-aos="zoom-in-up" className="text-2xl lg:text-5xl py-12 font-light tracking-widest">My <span
        className="text-secondary">Advantages</span></h1>
      <div data-aos="zoom-in-up" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-8">
        {
          skills && skills.map((skill, id) => <SkillView key={id} data={skill}></SkillView>)
        }
      </div>
    </section>
  );
}

const SkillView = ({ data }) => {
  const { skill, img } = data;
  const defStyle = {
    div: "border-[1px] border-gray-500",
    img: "grayscale w-16"
  };
  const [style, setStyle] = useState(defStyle);

  const handleHover = () => {
    setStyle({
      div: "border-2 border-secondary",
      img: "w-20"
    });
  }
  const handleRestore = () => setStyle(defStyle);
  
  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleRestore}
      className={style.div + " flex flex-col items-center gap-5 transition-all rounded-[5rem] p-10 h-48"}>
      <img src={img} alt="" className={style.img + " filter transition-all"}></img>
      <h3 className="text-xl">{skill}</h3>
    </div>
  );
}

SkillView.propTypes = {
  data: PropTypes.object
};

export default Skills;