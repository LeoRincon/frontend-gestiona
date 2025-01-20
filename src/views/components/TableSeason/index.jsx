import EditIcon from "../icons/EditIcon"
import DeleteIcon from "../icons/DeleteIcon"
import ArrowBackIcon from "../icons/ArrowBackIcon"
import ArrowForwardIcon from "../icons/ArrowForwardIcon"
import DataTable from "react-data-table-component"

import "./styles.css"

const columns=[
    {
        name:"Nombre",
        selector:(row) =>row.nombre
    },
    {
        name:"Duracion",
        selector:(row) =>row.duracion
    },
    {
        name:"Fecha Inicio",
        selector:(row) =>row.fechaInicio
    },
    {
        name:"Fecha Final",
        selector:(row) =>row.fechaFinal
    },
    {
        name:"Id Cultivo",
        selector:(row) =>row.idCultivo
    },
    {
        name:"Id Novedades",
        selector:(row) =>row.idNovedades
    },
]

const data=[
    {
        id:"1",
        nombre:"XXXXXX",
        duracion:"100",
        fechaInicio:"XX/XX/XXXX",
        fechaFinal:"XX/XX/XXXX",
        idCultivo:"XXXXXX",
        idNovedades:"XXXXXX"
    },
    {
        id:"2",
        nombre:"XXXXXX",
        duracion:"200",
        fechaInicio:"XX/XX/XXXX",
        fechaFinal:"XX/XX/XXXX",
        idCultivo:"XXXXXX",
        idNovedades:"XXXXXX"
    },
]
 
export default function TableSeason(){
    const iconProps={
        width:25,
        height:25,
        fill:"#193c32"
    };
    const arrowIconProps={
        width:17,
        height:18,
        fill:"#000000"
    };
    return(
        <DataTable columns={columns} data={data} onSelectedRowsChange={(row) => console.log(row)} selectableRows/>
    )
}