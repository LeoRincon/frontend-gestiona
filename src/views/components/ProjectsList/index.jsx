import AddButton from "../addButton";
import ProjectCard from "../ProjectCard";
import "./styles.css";

function ProjectsList({ projects, buttonOnClick }) {
  const iconSize = 30;
  return (
    <main className="project-container">
      <header className="project-header">
        <h1>Proyectos</h1>
        <AddButton
          iconWidth={iconSize}
          iconHeight={iconSize}
          onClick={buttonOnClick}
        />
      </header>
      <section>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </main>
  );
}

export default ProjectsList;
