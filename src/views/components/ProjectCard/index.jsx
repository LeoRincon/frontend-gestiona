/* eslint-disable react/prop-types */
import { NavLink } from 'react-router';
import './styles.css';

function ProjectCard({ project }) {
 const projectNameString = project.nombre;
 const projectDescriptionString = project.descripcion;
 let projectInitials = '';
 if (projectNameString.includes(' ')) {
  const words = projectNameString.split(' ');
  projectInitials = words[0][0] + words[1][0];
  projectInitials = projectInitials.toUpperCase();
 } else {
  projectInitials = projectNameString[0];
 }

 const setProjectToSession = () => {
  const userData = sessionStorage.getItem('user_data');
  const user = JSON.parse(userData);
  const newUserData = {
   ...user,
   projectId: project.id,
  };

  sessionStorage.setItem('user_data', JSON.stringify(newUserData));
 };

 return (
  <NavLink className='project-card' to={'/home'} onClick={setProjectToSession}>
   <div className='project-card__initials'>{projectInitials}</div>
   <div>
    <h3>{projectNameString}</h3>
    <p>{projectDescriptionString}</p>
   </div>
  </NavLink>
 );
}

export default ProjectCard;
