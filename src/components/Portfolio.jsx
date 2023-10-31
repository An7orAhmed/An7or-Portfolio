import { PiCertificateFill } from 'react-icons/pi';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Project from './Project';

function Portfolio() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then(data => data.json())
      .then(data => setProjects(data))
  }, []);

  return (
    <section className="py-14 lg:py-10" id="portfolio">
      <div data-aos="fade-left" className="card flex-row items-center gap-3 glass rounded-full py-2 px-10 w-fit uppercase">
        <PiCertificateFill></PiCertificateFill>
        <a href="#portfolio">Portfolio</a>
      </div>
      <h1 data-aos="zoom-in-up" className="text-2xl lg:text-5xl py-12 font-light tracking-widest">
        Featured <span className="text-secondary">Projects</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {
          projects?.length > 4 ?
            projects?.slice(0, 4).map((project, id) => <Project key={id} data={project}></Project>)
            :
            projects?.map((project, id) => <Project key={id} data={project}></Project>)
        }
        {
          projects?.length > 4 && <Link to="/projects" className="md:col-span-2 mx-auto">
            <button className="btn btn-outline text-secondary hover:bg-secondary w-32 rounded-3xl">See All</button>
          </Link>
        }
      </div>
    </section>
  );
}

export default Portfolio;