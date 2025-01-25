import "./styles/information.css";
import Sidebar from "./components/Sidebar";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { getInformation } from "../services/informationServices";
import { formatingDate } from "../utils/formatingDate";

const Information = () => {
  const [data, setData] = useState({
    expenses: [
      {
        id: "c7890123-8abc-1234-5678-abc456789abc",
        id_temporada: "d2345678-8def-1234-5678-abc456789abc",
        id_insumo: "b6789012-8def-1234-5678-abc456789abc",
        cantidad_usada: 20,
        precio_total: 1000,
        id_unidad_medida: "e2345678-9def-1234-5678-abc456789012",
      },
    ],
    sales: [
      {
        id: "b2345678-8def-1234-5678-abc456789abc",
        cantidad_vendida: 400,
        precio_total: 2000,
        fecha_venta: "2024-06-01T05:00:00.000Z",
        id_temporada: "d2345678-8def-1234-5678-abc456789abc",
        observaciones: "Venta exitosa",
        id_unidad_medida: "e2345678-9def-1234-5678-abc456789012",
        precio_unitario: 100,
      },
    ],
    production: [
      {
        id: "a1234567-8abc-1234-5678-abc456789def",
        nombre: "productName",
        cantidad_recolectada: 500,
        fecha_recoleccion: "2024-05-01T05:00:00.000Z",
        id_temporada: "d2345678-8def-1234-5678-abc456789abc",
        id_unidad_medida: "e2345678-9def-1234-5678-abc456789012",
      },
    ],
    activityManagements: [
      {
        id: "d8901234-8def-1234-5678-abc456789abc",
        id_actividad: "f4567890-8def-1234-5678-abc456789abc",
        id_temporada: "d2345678-8def-1234-5678-abcf456789abc",
        costo: 200,
        gasto_insumo_id: "c7890123 - 8abc - 1234 - 5678 - abc456789abc",
      },
    ],
  });

  const [columns, setColumns] = useState({
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
  });

  useEffect(() => {
    console.log("columns", columns);
    getInformation()
      .then((dataDb) => {
        console.log("Datos obtenidos de la API, dataDb: ", dataDb);
        setData(dataDb);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

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
              <label htmlFor="proyect-select"></label>
              <select name="proyect" id="proyect-select">
                <option value="andina">Región Andina</option>
                <option value="caribe">Región Caribe</option>
                <option value="pacifica">Región Pacífica</option>
                <option value="amazonia">Región Amazonia</option>
                <option value="orinoquia">Región Orinoquia</option>
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