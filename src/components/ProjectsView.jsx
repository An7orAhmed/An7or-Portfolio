import { PiCertificateFill } from 'react-icons/pi';
import { useEffect, useState } from "react";
import { PropTypes } from 'prop-types';

function ProjectsView() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then(data => data.json())
      .then(data => setProjects(data))
  }, []);

  return (
    <section className="py-14 lg:py-10" id="projects">
      <div data-aos="fade-left" className="card flex-row items-center gap-3 glass rounded-full py-2 px-10 w-fit uppercase">
        <PiCertificateFill></PiCertificateFill>
        <a href="#projects">Projects</a>
      </div>
      <h1 data-aos="zoom-in-up" className="text-2xl lg:text-5xl py-12 font-light tracking-widest">
        All <span className="text-secondary">Projects</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {
          projects?.map((project, id) => <ProjectView key={id} data={project}></ProjectView>)
        }
      </div>
    </section>
  );
}

const ProjectView = ({ data }) => {
  const { title, description, tags, imgs, link } = data;

  return (
    <div data-aos="fade-right" className="card border-2 border-gray-500 h-fit transition-all">
      <figure className="relative">
        {
          imgs && imgs.map((img, id) => <img key={id} onClick={() => window.location = img} className="h-auto max-w-full" src={img} />)
        }
        <div className="absolute flex flex-wrap gap-3 bottom-3 right-3">
          {
            tags && tags.map((tag, id) => <p key={id} className="py-2 px-4 bg-background opacity-50 hover:opacity-100 rounded-lg">{tag}</p>)
          }
        </div>
      </figure>
      <a href={link}>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

ProjectView.propTypes = {
  data: PropTypes.object
};

export default ProjectsView;