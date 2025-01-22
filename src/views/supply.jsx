import TitleSection from "./components/TitleSection"
import ActionsBar from "./components/ActionsBar"
import TableSupply from "./components/TableSupply"
import Sidebar from "./components/Sidebar"
import AddSupplyModal from "./components/AddSupplyModal"
import DeleteSupplyModal from "./components/DeleteSupplyModal"
import { fetchSupplies, createSupply } from "../services/supplyService"
import { useState,useEffect } from "react"


import "./styles/supply.css"

export default function Supply(){
    const  [add,setAdd]= useState(false)
    const  [deletes,setDeletes]= useState(false)
    const [data,setData] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
        try {
            const result = await fetchSupplies()
            setData(result);
        } catch (error) {
            console.error('Error fetching supplies data(F):', error);
        }
        };
    
        fetchData();
    }, []);

    const handleAddModal=()=>{
        setAdd(!add)
    }

    const handleDeletesModal=()=>{
        setDeletes(!deletes)
    }

    const handleAddFetch =async(supply)=>{
        const dato = {
            "nombre": supply.nombre,
		    "cantidad_disponible": parseFloat(supply.cantidad),
		    "fecha_ingreso":  supply.ingreso+"T05:00:00.000Z",
		    "precio": parseFloat(supply.precio),
		    "id_inventario": supply.idInventario,
		    "id_categoria": supply.idCategoria,
            "id_unidad_medida": supply.idUnidad
        }
        const result= await createSupply(dato)
        console.log(result)
        try {
            const result = await fetchSupplies()
            setData(result);
        } catch (error) {
            console.error('Error fetching supplies data(F):', error);
        }
    }

    return (
        <div className="supply-view">
            <Sidebar />
            <main className="supply-main-view">
                <TitleSection title="INVENTARIO DE INSUMOS" />
                <ActionsBar handleAddModal={handleAddModal} handleDeleteModal={handleDeletesModal} />
                <TableSupply data={data} />
                {add && <AddSupplyModal handleOpenModal={handleAddModal} handleAddFetch={handleAddFetch} />}
                {deletes && <DeleteSupplyModal handleOpenModal={handleDeletesModal} />}
            </main>
        </div>
    )
}
