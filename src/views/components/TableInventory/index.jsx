import DataTable from "react-data-table-component"

import "./styles.css"
export default function TableInventory({data}){
    const dataTable = [...data]
    const keys = dataTable.map((item)=>Object.keys(item))
    const values = dataTable.map((item)=>Object.values(item))
    let dataColums = [];   
    let dataValues = [];
    if (keys.length > 0 && values.length > 0) {
        dataColums = keys[0].map((key) => ({
          name: key,
          selector: (row) => row[key],
        }));
      
        dataValues = values.map((value) => ({
          id: value[0],
          nombre: value[1],
          cantidad_disponible: value[2],
          fecha_ingreso: value[3],
          precio: value[4],
          id_inventario: value[5],
          id_categoria: value[6],
          id_unidad_medida: value[7],
        }));
      }

    return(
        <DataTable columns={dataColums} data={dataValues}  onSelectedRowsChange={(row) => console.log(row)} selectableRows/>
    )
}