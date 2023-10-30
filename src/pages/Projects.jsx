import ProjectsView from '../components/ProjectsView';
import BioInfo from './../components/BioInfo';

function Projects() {
  return (
    <div className="bg-background text-white">
      <BioInfo></BioInfo>
      <main className="container mx-auto pl-4 lg:pl-96 pr-4 lg:pr-56 py-16">
        <ProjectsView></ProjectsView>
      </main>
    </div>
  );
}

export default Projects;