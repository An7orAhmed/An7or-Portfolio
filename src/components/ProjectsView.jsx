import { useEffect, useState } from "react";
import Project from './Project';

function ProjectsView() {
  const [allProjects, setAllProjects] = useState(null);
  const [projects, setProjects] = useState(null);
  const [tags, setTags] = useState(['All']);
  const [selectedTag, setSeletecdTag] = useState('All');

  useEffect(() => {
    fetch("/projects.json")
      .then(data => data.json())
      .then(data => {
        setAllProjects(data);
        setProjects(data);
        data.forEach(project => {
          project.tags.forEach(tag => { 
            if(tags.indexOf(tag) === -1) setTags([...tags, tag]);
          });
        })
      })
  }, [tags]);

  function filterProjects(filterBy) {
    setSeletecdTag(filterBy);
    if(filterBy === 'All') {
      setProjects(allProjects);
      return;
    }
    setProjects(allProjects.filter(project => project.tags.includes(filterBy)));
  }

  return (
    <section className="py-14 lg:py-10" id="projects">
      <h1 data-aos="zoom-in-up" className="text-2xl lg:text-5xl pb-8 font-light tracking-widest">
        All <span className="text-secondary">Projects</span>
      </h1>

      <div data-aos="fade-down" className="flex flex-wrap gap-5 pb-8">
        {
          tags?.map((tag, id) => <button key={id} onClick={() => filterProjects(tag)} className={`btn btn-outline rounded-3xl ${selectedTag === tag && "bg-secondary"}`}>{tag}</button>)
        }
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {
          projects?.map((project, id) => <Project key={id} data={project}></Project>)
        }
      </div>
    </section>
  );
}

export default ProjectsView;