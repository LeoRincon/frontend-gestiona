import DataTable from "react-data-table-component"
import { formatingDate } from "../../../utils/formatingDate";

import "./styles.css"
export default function TableSupply({data, handleSelectedData, unitsData, categoriesData, dataSearch }){
    function onSelected(row){
      if(row.selectedRows[0]){
        handleSelectedData(row.selectedRows[0].id)
      }
    }
    let dataColums = [];   
    let dataValues = [];
    //Se comprueba que se hayan cargado las datos
    if(typeof data !== "undefined"){
      const dataTable = [...data]
      //Se crean las datos que se usaran para "DATATABLE"
      const keys = dataTable.map((item)=>Object.keys(item))
      const values = dataTable.map((item)=>Object.values(item))
      if (keys.length > 0 && values.length > 0) {
          //Se crean las columnas
          dataColums = keys[0].map((key) => ({
            name: key,
            selector: (row) => row[key],
          }));
          //Se crean los registros
          dataValues = values.map((value) => ({
            id: value[0],
            nombre: value[1],
            cantidad_disponible: value[2],
            fecha_ingreso: formatingDate(value[3]),
            precio: value[4],
            id_inventario: value[5],
            id_categoria: value[6],
            id_unidad_medida: value[7],
          }));
          //POR SI USAN LA BUSQUEDA
          if(dataSearch){
            dataValues=[
              {
                id: dataSearch.id,
                nombre: dataSearch.nombre,
                cantidad_disponible: dataSearch.cantidad_disponible,
                fecha_ingreso: formatingDate(dataSearch.fecha_ingreso),
                precio: dataSearch.precio,
                id_inventario: dataSearch.id_inventario,
                id_categoria: dataSearch.id_categoria,
                id_unidad_medida: dataSearch.id_unidad_medida,
              }
             ]
          }
        }
    }

    return(
        <DataTable columns={dataColums} data={dataValues}  onSelectedRowsChange={onSelected} selectableRows/>
    )
}