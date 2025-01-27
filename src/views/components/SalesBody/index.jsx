import React, { useState, useEffect } from "react";
import DeleteIcon from "../icons/DeleteIcon";
import EditIcon from "../icons/EditIcon";
import AddIcon from "../icons/AddIcon";
import PopupSales from "../PopupSales";
import DataTable from "react-data-table-component";
import "./styles.css";
import AddButton from "../addButton";


const columns = [
  {
    name: "#",
    selector: (row) => row.id,
    grow: 1,
  },
  {
    name: "Temporada",
    selector: (row) => row.temporada,
    grow: 2,
  },
  {
    name: "Fecha de Venta",
    selector: (row) => row.fechaVenta,
    grow: 2,
  },
  {
    name: "Cantidad Vendida",
    selector: (row) => row.cantidadVendida,
    grow: 2,
  },
  {
    name: "Unidad de Medida",
    selector: (row) => row.unidadMedida,
    grow: 2,
  },
  {
    name: "Precio Unitario ",
    selector: (row) => row.precioUnitario,
    grow: 2,
  },
  {
    name: "Precio Total",
    selector: (row) => row.precioTotal,
    grow: 2,
  },
  {
    name: "Observaciones",
    selector: (row) => row.observaciones,
    grow: 3,
  },
];

function SalesBody({ onClickAddButton,dataTable }) {
  
  return (
    <main className="sales-body">
      <div className="sales-body__actions">
        <AddButton onClick={onClickAddButton} iconHeight={30} iconWidth={30} />
      </div>
      <DataTable columns={columns} data={dataTable} selectableRows pagination />
    </main>
  );
}

//}
export default SalesBody;
