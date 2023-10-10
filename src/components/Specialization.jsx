import { FaLayerGroup } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function Specialization() {
  const [specials, setSpecials] = useState(null);

  useEffect(() => {
    fetch("/specializations.json")
      .then(data => data.json())
      .then(data => setSpecials(data))
  }, []);

  return (
    <section className="py-14 lg:py-10" id="services">
      <div data-aos="fade-left" className="card flex-row items-center gap-3 glass rounded-full py-2 px-10 w-fit uppercase">
        <FaLayerGroup></FaLayerGroup>
        <a href="#services">Services</a>
      </div>
      <h1 data-aos="zoom-in-up" className="text-2xl lg:text-5xl py-12 font-light tracking-widest">
        My <span className="text-secondary">Specializations</span>
      </h1>
      {
        specials && specials.map((special, id) => <SpecialView key={id} data={special}></SpecialView>)
      }   
    </section>
  );
}

const SpecialView = ({ data }) => {
  const { area, info, link, count, img } = data;
  return (
    <div data-aos="fade-up" className="flex justify-between items-start gap-x-4 border-[1px] border-gray-500 hover:border-secondary p-5 hover:p-7 transition-all rounded-3xl mb-4">
      <div className="flex flex-col gap-3 items-stretch">
        <h1 className="text-2xl">{area}</h1>
        <p className="text-gray-500 text-justify">{info}</p>
        <a href={link} className="border-[1px] border-gray-700 hover:border-primary rounded-full px-7 py-4 mr-auto">{count}</a>
      </div>
      <img src={img} alt="" width="32px"></img>
    </div>
  );
}

SpecialView.propTypes = {
  data: PropTypes.object
};

export default Specialization;