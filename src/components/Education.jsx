import { FaBriefcase } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function Education() {
  const [educations, setEducations] = useState(null);

  useEffect(() => {
    fetch("/educations.json")
      .then(data => data.json())
      .then(data => setEducations(data))
  }, []);

  return (
    <section className="py-14 lg:py-20" id="resume">
      <div data-aos="fade-left" className="card flex-row items-center gap-3 glass rounded-full py-2 px-10 w-fit uppercase">
        <FaBriefcase></FaBriefcase>
        <a href="#resume">resume</a>
      </div>
      <h1 data-aos="zoom-in-up" className="text-2xl lg:text-5xl py-12 font-light tracking-widest">Education &<span className="text-secondary">
        Experience</span></h1>
      <ol className="relative border-l border-gray-700">
        {
          educations && educations.map((education, id) => <EducatuionView key={id} data={education}></EducatuionView>)
        }
      </ol>
    </section>
  );
}

const EducatuionView = ({ data }) => {
  const { time, where, position, info } = data;
  return (
    <li className="ml-16" data-aos="fade-left">
      <div className="absolute w-4 h-4 rounded-full mt-[13px] -left-[72px] border border-gray-900 bg-gray-700">
      </div>
      <time className="mb-1 text-sm font-normal leading-10 text-gray-500">{time}</time>
      <h3 className="text-3xl font-light text-gray-900 leading-10 dark:text-white">{where}</h3>
      <p className="text-xl font-normal text-gray-500 leading-10 dark:text-gray-400">{position}</p>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400 italic">{info}</p>
    </li>
  );
}

EducatuionView.propTypes = {
  data: PropTypes.object
};

export default Education;