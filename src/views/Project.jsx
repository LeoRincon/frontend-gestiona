import InitialSidebar from "./components/InitialSidebar";
import InitialView from "./components/InitialView";
import AddProjectModal from "./components/AddProjectModal";
import ProjectsList from "./components/ProjectsList";
import { useRef } from "react";

import "./styles/project.css";

export default function Project() {
  const dialogRef = useRef(null);
  const projects = ["Proyecto Cafetera", "Aguacatera Grande"];

  const handleOpenModal = () => {
    console.log("Si se abre la modal");
    if (dialogRef.current) dialogRef.current.showModal();
  };

  const handleCloseModal = () => {
    console.log("si cierra");
    if (dialogRef.current) dialogRef.current.close();
  };

  return (
    <div className="container-project">
      <InitialSidebar />
      {!projects.length ? (
        <InitialView buttonOnClick={handleOpenModal} />
      ) : (
        <ProjectsList buttonOnClick={handleOpenModal} projects={projects} />
      )}
      <AddProjectModal ref={dialogRef} onClose={handleCloseModal} />
    </div>
  );
}
