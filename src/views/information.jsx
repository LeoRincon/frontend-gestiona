import "./styles/information.css";
import Sidebar from "./components/Sidebar";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { getInformation } from "../services/informationServices";
import { formatingDate } from "../utils/formatingDate";
//import { set } from "react-hook-form";

const Information = () => {
  const [data, setData] = useState({
    expenses: [],
    sales: [],
    production: [],
    activityManagements: [],
    projects: [],
  });

  const columns = {
    expenses: [
      { name: "#", selector: (row) => row.id },
      { name: "Nombre insumo", selector: (row) => row.suppliesName },
      { name: "Cantidad usada", selector: (row) => row.usedQuantity },
      { name: "Unidad de medida", selector: (row) => row.unit },
      { name: "Precio total", selector: (row) => row.totalPrice },
    ],
    sales: [
      { name: "#", selector: (row) => row.id },
      { name: "Cantidad vendida", selector: (row) => row.soldQuantity },
      { name: "Unidad de medida", selector: (row) => row.unit },
      { name: "Precio unitario", selector: (row) => row.unitPrice },
      { name: "Precio total", selector: (row) => row.totalPrice },
      {
        name: "Fecha de venta",
        selector: (row) => row.saleDate,
        cell: (row) => formatingDate(row.saleDate),
      },
      { name: "Observaciones", selector: (row) => row.observations },
    ],
    production: [
      { name: "#", selector: (row) => row.id },
      { name: "Nombre", selector: (row) => row.name },
      { name: "Cantidad recolectada", selector: (row) => row.harvestedQuantity },
      { name: "Unidad de medida", selector: (row) => row.unit },
      {
        name: "Fecha de recolección",
        selector: (row) => row.harvestDate,
        cell: (row) => formatingDate(row.harvestDate),
      },
    ],
    activityManagements: [
      { name: "#", selector: (row) => row.id },
      { name: "Nombre actividad", selector: (row) => row.activityName },
      { name: "Nombre insumo", selector: (row) => row.suppliesName },
      { name: "Cantidad usada", selector: (row) => row.usedQuantity },
      { name: "Costo insumo", selector: (row) => row.suppliesCost },
      { name: "Costo total", selector: (row) => row.totalCost },
    ],
  };



  //nuevos estados para proyectos, cultivos y temporadas
  const [projects, setProjects] = useState([]);
  const [selectedProyect, setSelectedProject] = useState("");

  const handleProjectChange = (event) => {
    setSelectedProject(event.target.value);
  };


  useEffect(() => {
    console.log("columns", columns);
    getInformation()
      .then((dataDb) => {
        setData(dataDb);
        setProjects(dataDb.projects);//actualizar proyectos cultivos y temporadas

      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  useEffect(() => {
    console.log("proyecto seleccionado", selectedProyect);
  }, [selectedProyect]);


  return (
    <div className="metricas">
      <Sidebar />
      <main>
        <header>
          <h1 id="title">INFORMACIÓN</h1>
        </header>

        <nav className="horizontal-nav">
          <div className="nav-item">
            <h2>Proyecto</h2>
            <div className="select-container">
              <label htmlFor="project-select"></label>
              <select 
              name="project" 
              id="project-select" 
              value={selectedProyect} //valor seleccionado
              onChange={handleProjectChange} //funcion para manejar el cambio
              >
                <option value="">Selecciona un proyecto</option>
                {projects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.nombre}
                    </option>
                ))}
              </select>
            </div>
          </div>

          <div className="nav-item">
            <h2>Cultivo</h2>
            <div className="select-container">
              <label htmlFor="cultivo-select"></label>
              <select name="cultivo" id="cultivo-select">
                <option value="Arroz">Arroz</option>
                <option value="Mandarina">Mandarina</option>
                <option value="Cacao">Cacao</option>
                <option value="Cafe">Café</option>
              </select>
            </div>
          </div>

          <div className="nav-item">
            <h2>Temporada</h2>
            <div className="select-container">
              <label htmlFor="Temporada"></label>
              <select name="Temporada" id="Temporada">
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>
            </div>
          </div>
        </nav>

        <br />

        <div className="table-container">
          <h2 className="table_caption">Gastos</h2>
          <br />
          <DataTable columns={columns.expenses} data={data.expenses} />
        </div>

        <br />

        <div className="table-container">
          <h2 className="table_caption">Ventas</h2>
          <br />
          <DataTable columns={columns.sales} data={data.sales} />
        </div>

        <br />

        <div className="table-container">
          <h2 className="table_caption">Producción</h2>
          <DataTable columns={columns.production} data={data.production} />
        </div>

        <br />

        <div className="table-container">
          <h2 className="table_caption">Gestión de Actividades</h2>
          <DataTable
            columns={columns.activityManagements}
            data={data.activityManagements}
          />
        </div>
      </main>
    </div>
  );
};

export default Information;