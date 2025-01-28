import DataTable from "react-data-table-component"
import { formatingDate } from "../../../utils/formatingDate";

import "./styles.css"

export default function TableSeason({data,handleSelectedData,dataSearch}){
    function onSelected(row){
      if(row.selectedRows[0]){
        handleSelectedData(row.selectedRows[0].id)
      }
    }
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
          fecha_inicio: formatingDate(value[3]),
          fecha_fin: formatingDate(value[4]),
          id_cultivo: value[5],
          novedades_id: value[6],
        }));
        if(dataSearch){
          dataValues=[
            {
              id: dataSearch.id,
              nombre: dataSearch.nombre,
              duracion: dataSearch.duracion,
              fecha_inicio: dataSearch.fecha_inicio,
              fecha_fin: dataSearch.fecha_fin,
              id_cultivo: dataSearch.id_cultivo,
              novedades_id: dataSearch.novedades_id,
            }
           ]
        }
    }
    return(
        <DataTable columns={dataColums} data={dataValues} onSelectedRowsChange={onSelected} selectableRows/>
    )
}