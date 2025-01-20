import TitleSection from "./components/TitleSection"
import ActionsBar from "./components/ActionsBar"
import TableInventory from "./components/TableInventory"
import Sidebar from "./components/Sidebar"
import AddSupplyModal from "./components/AddSupplyModal"
import DeleteSupplyModal from "./components/DeleteSupplyModal"
import { fetchSupplies } from "../services/getSupplies"
import { useState,useEffect } from "react"


import "./styles/inventory.css"

export default function Inventory(){
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
    return (
        <div className="inventory-view">
            <Sidebar />
            <main className="inventory-main-view">
                <TitleSection title="INVENTARIO DE INSUMOS" />
                <ActionsBar handleOpenModal={handleAddModal} handleDeleteModal={handleDeletesModal} />
                <TableInventory data={data} />
                {add && <AddSupplyModal handleOpenModal={handleAddModal}/>}
                {deletes && <DeleteSupplyModal handleOpenModal={handleDeletesModal} />}
            </main>
        </div>
    )
}
