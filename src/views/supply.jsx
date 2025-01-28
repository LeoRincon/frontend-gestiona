import TitleSection from "./components/TitleSection"
import ActionsBar from "./components/ActionsBar"
import TableSupply from "./components/TableSupply"
import Sidebar from "./components/Sidebar"
import AddSupplyModal from "./components/AddSupplyModal"
import EditSupplyModal from "./components/EditSupplyModal"
import DeleteSupplyModal from "./components/DeleteSupplyModal"
import SearchSupplyModal from "./components/SearchSupplyModal"
import {
    fetchSupplies, createSupply,editSupply, deleteSupply, fetchUnits, fetchCategories, fetchInventories 
} from "../services/supplyService"
import { useState,useEffect,useRef } from "react"


import "./styles/supply.css"

export default function Supply(){
    const  [add,setAdd]= useState(false)
    const  [edit,setEdit]= useState(false)
    const  [deletes,setDeletes]= useState(false)
    const  [search,setSearch]= useState(false)
    const [data,setData] = useState([])
    const [dataSearch,setDataSearch] = useState(null)
    const [unitsData,setUnitsData] = useState([])
    const [categoriesData,setCategoriesData] = useState([])
    const [inventoriesData,setInventoriesData] = useState([])
    const id = useRef(null)
    
    useEffect(() => {
        fetchData();
        fetchDataUnits();
        fetchDataCategories();
        fetchDataInventories();
    }, []);

    async function fetchData(){
        try {
            const result = await fetchSupplies()
            setData(result);
        } catch (error) {
            console.error('Error fetching supplies data(F):', error);
        }
        };

    async function fetchDataUnits(){
        try {
            const result = await fetchUnits()
            setUnitsData(result);
        } catch (error) {
            console.error('Error fetching units data(F):', error);
        }
        };

    async function fetchDataCategories(){
        try {
            const result = await fetchCategories()
            setCategoriesData(result);
        } catch (error) {
            console.error('Error fetching categories data(F):', error);
        }
        };

    async function fetchDataInventories(){
        try {
            const result = await fetchInventories()
            setInventoriesData(result);
        } catch (error) {
            console.error('Error fetching categories data(F):', error);
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

    const handleSearchModal=()=>{
        setSearch(!search)
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

    const handleSearch=(registerSearch)=>{
        setDataSearch(registerSearch)
        handleSearchModal()
    }

    return (
        <div className="supply-view">
            <Sidebar />
            <main className="supply-main-view">
                <TitleSection title="INVENTARIO DE INSUMOS" />

                <ActionsBar 
                 handleAddModal={handleAddModal} 
                 handleEditModal={handleEditModal}  
                 handleDeleteModal={handleDeletesModal} 
                 handleSearchModal={handleSearchModal} 
                 dataSearch={dataSearch}
                 setDataSearch={setDataSearch} />

                <TableSupply 
                 data={data} 
                 handleSelectedData={handleSelectedData} 
                 unitsData={unitsData} 
                 categoriesData={categoriesData} 
                 dataSearch={dataSearch} />

                {add && <AddSupplyModal 
                 handleOpenModal={handleAddModal} 
                 handleAddFetch={handleAddFetch} 
                 unitsData={unitsData} 
                 categoriesData={categoriesData}
                 inventoriesData={inventoriesData}
                 data={data}  />}

                {edit && <EditSupplyModal 
                 handleEditModal={handleEditModal} 
                 id={id.current} 
                 completeData={data} 
                 handleEditFetch={handleEditFetch}
                 unitsData={unitsData} 
                 categoriesData={categoriesData}
                 inventoriesData={inventoriesData} />}

                {deletes && <DeleteSupplyModal 
                 handleOpenModal={handleDeletesModal} 
                 handleDeleteFecth={handleDeleteFecth} 
                 id={id.current} />}

                {search && <SearchSupplyModal 
                 dataName={data} 
                 handleSearchModal={handleSearchModal} 
                 handleSearch={handleSearch}
                 data={data}  /> }
            </main>
        </div>
    )
}
