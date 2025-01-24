import TitleSection from "./components/TitleSection"
import ActionsBar from "./components/ActionsBar"
import TableSupply from "./components/TableSupply"
import Sidebar from "./components/Sidebar"
import AddSupplyModal from "./components/AddSupplyModal"
import EditSupplyModal from "./components/EditSupplyModal"
import DeleteSupplyModal from "./components/DeleteSupplyModal"
import { fetchSupplies, createSupply,editSupply, deleteSupply } from "../services/supplyService"
import { useState,useEffect,useRef } from "react"


import "./styles/supply.css"

export default function Supply(){
    const  [add,setAdd]= useState(false)
    const  [edit,setEdit]= useState(false)
    const  [deletes,setDeletes]= useState(false)
    const [data,setData] = useState([])
    const id = useRef(null)
    
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData(){
        try {
            const result = await fetchSupplies()
            setData(result);
        } catch (error) {
            console.error('Error fetching supplies data(F):', error);
        }
        };

    const handleAddModal=()=>{
        setAdd(!add)
    }

    const handleEditModal=()=>{
        setEdit(!edit)
    }

    const handleDeletesModal=()=>{
        setDeletes(!deletes)
    }

    const handleSelectedData=(param)=>{
        id.current=param
    }

    const handleAddFetch =async(supply)=>{
        const result= await createSupply(supply)
        console.log(result)
        fetchData()
        handleAddModal()
    }

    const handleEditFetch =async(supply)=>{
        const result = await editSupply(id.current,supply)
        fetchData()
        handleEditModal()
        console.log(result)
    }

    const handleDeleteFecth= async()=>{
        await deleteSupply(id.current)
        fetchData()
        handleDeletesModal()
        id.current=null
    }

    return (
        <div className="supply-view">
            <Sidebar />
            <main className="supply-main-view">
                <TitleSection title="INVENTARIO DE INSUMOS" />
                <ActionsBar handleAddModal={handleAddModal} handleEditModal={handleEditModal}  handleDeleteModal={handleDeletesModal} />
                <TableSupply data={data} handleSelectedData={handleSelectedData} />
                {add && <AddSupplyModal handleOpenModal={handleAddModal} handleAddFetch={handleAddFetch} />}
                {edit && <EditSupplyModal handleEditModal={handleEditModal} id={id.current} completeData={data} handleEditFetch={handleEditFetch} />}
                {deletes && <DeleteSupplyModal handleOpenModal={handleDeletesModal} handleDeleteFecth={handleDeleteFecth} id={id.current} />}
            </main>
        </div>
    )
}
