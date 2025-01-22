import DataTable from "react-data-table-component"

import "./styles.css"

export default function TableSeason({data}){
    let dataColums = [];   
    let dataValues = [];
    if(typeof data !== "undefined"){
        
        const dataTable = [...data] 
        const keys = dataTable.map((item)=>Object.keys(item))
        const values = dataTable.map((item)=>Object.values(item))
        dataColums = keys[0].map((key) => ({
          name: key,
          selector: (row) => row[key],
        }));
        dataValues = values.map((value) => ({
          id: value[0],
          nombre: value[1],
          duracion: value[2],
          fecha_inicio: value[3],
          fecha_fin: value[4],
          id_cultivo: value[5],
          novedades_id: value[6],
        }));
    }
    return(
        <DataTable columns={dataColums} data={dataValues} onSelectedRowsChange={(row) => console.log(row)} selectableRows/>
    )
}