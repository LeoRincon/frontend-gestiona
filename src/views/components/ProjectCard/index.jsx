import { NavLink } from "react-router";
import "./styles.css";

function ProjectCard({ project }) {
  const projectString = project;
  let projectInitials = "";
  if (projectString.includes(" ")) {
    const words = projectString.split(" ");
    projectInitials = words[0][0] + words[1][0];
  } else {
    projectInitials = projectString[0];
  }
  return (
    <NavLink className="project-card" to={"/home"}>
      <div className="project-card__initials">{projectInitials}</div>
      <h3>{project}</h3>
    </NavLink>
  );
}

export default ProjectCard;
