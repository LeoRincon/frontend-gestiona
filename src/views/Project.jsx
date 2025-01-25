import InitialSidebar from './components/InitialSidebar';
import InitialView from './components/InitialView';
import AddProjectModal from './components/AddProjectModal';
import ProjectsList from './components/ProjectsList';
import { useEffect, useRef, useState } from 'react';
import { createProject } from '../services/projectService';

import './styles/project.css';
import { fetchProjects } from '../services/projectService';

export default function Project() {
 const dialogRef = useRef(null);
 const [projects, setProjects] = useState([]);

 useEffect(() => {
  const dataSessionStorage = sessionStorage.getItem('user_data');
  console.log(
   '🇨🇴🚨 => useEffect => dataSessionStorage:',
   JSON.parse(dataSessionStorage)
  );

  const getProjects = async () => {
   const projects = await fetchProjects();
   setProjects(projects);
  };
  getProjects();
 }, []);

 const handleOpenModal = () => {
  if (dialogRef.current) dialogRef.current.showModal();
 };

 const handleCloseModal = () => {
  if (dialogRef.current) dialogRef.current.close();
 };
 const handelAddElement = async (element) => {
  try {
   const response = await createProject(element);
   if (!response) throw new Error('Error al crear el proyecto');
   setProjects((prevProjects) => [...prevProjects, response]);
  } catch (error) {
   console.error(error);
  }
 };

 return (
  <div className='container-project'>
   <InitialSidebar />
   {!projects.length ? (
    <InitialView buttonOnClick={handleOpenModal} />
   ) : (
    <ProjectsList buttonOnClick={handleOpenModal} projects={projects} />
   )}
   <AddProjectModal
    ref={dialogRef}
    onClose={handleCloseModal}
    onAddElement={handelAddElement}
   />
  </div>
 );
}
