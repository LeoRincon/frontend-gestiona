import Sidebar from "./components/Sidebar"
import TitleSection from "./components/TitleSection"
import BeginEndBar from "./components/BeginEndBar"
import ActionsBar from "./components/ActionsBar"
import TableSeason from "./components/TableSeason"
import AddSeasonModal from "./components/AddSeasonModal"
import EditSeasonModal from "./components/EditSeasonModal"
import DeleteSeasonModal from "./components/DeleteSeasonModal/DeleteSeasonModal"
import { fetchSeasons, createSeason, editSeason, deleteSeason } from "../services/seasonServices"
import { useState, useEffect, useRef } from "react"

import "./styles/season.css"

export default function Season(){
    const [add,setAdd] = useState(false)
    const [edit,setEdit] = useState(false)
    const [deletes,setDeletes] = useState(false)
    const [data,setData]=useState()
    const id = useRef(null)

    useEffect(()=>{
        fetchData();
    },[])

    async function fetchData(){
            try {
                const result = await fetchSeasons()
                setData(result);
            } catch (error) {
                console.error('Error fetching season data(F):', error);
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

    const handleAddFetch=async(season)=>{
        const response = await createSeason(season)
        console.log(response)
        fetchData()
        handleAddModal()
    }

    const handleEditFetch =async(season)=>{
        const result = await editSeason(id.current,season)
        fetchData()
        handleEditModal()
        console.log(result)
    }
    
        const handleDeleteFecth= async()=>{
            await deleteSeason(id.current)
            fetchData()
            handleDeletesModal()
            id.current=null
        }

    return(
        <div className="season-view">
            <Sidebar />
            <main className="season-main-view">
                <TitleSection title="TEMPORADA" />
                <section className="section-bar-actions">
                    {/* <BeginEndBar /> */}
                    <ActionsBar handleAddModal={handleAddModal} handleEditModal={handleEditModal}  handleDeleteModal={handleDeletesModal}/>
                </section>
                <TableSeason data={data} handleSelectedData={handleSelectedData} /> 
                {add && <AddSeasonModal handleOpenModal={handleAddModal} handleAddFetch={handleAddFetch} />}
                {edit && <EditSeasonModal handleEditModal={handleEditModal} handleEditFetch={handleEditFetch} id={id.current} completeData={data}/> }
                {deletes && <DeleteSeasonModal handleOpenModal={handleDeletesModal} handleDeleteFecth={handleDeleteFecth} id={id.current} />}
            </main>
        </div>
    )
}