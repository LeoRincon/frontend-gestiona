import Sidebar from "./components/Sidebar"
import TitleSection from "./components/TitleSection"
import BeginEndBar from "./components/BeginEndBar"
import ActionsBar from "./components/ActionsBar"
import TableSeason from "./components/TableSeason"
import AddSeasonModal from "./components/AddSeasonModal/AddSeasonModal"
import DeleteSeasonModal from "./components/DeleteSeasonModal/DeleteSeasonModal"
import { fetchSeasons } from "../services/seasonServices"
import { useState, useEffect } from "react"

import "./styles/season.css"

export default function Season(){
    const [add,setAdd] = useState(false)
    const [deletes,setDeletes] = useState(false)
    const [data,setData]=useState()

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const result = await fetchSeasons()
                setData(result);
            } catch (error) {
                console.error('Error fetching season data(F):', error);
            }
            };
            
        fetchData();
    },[])

    const handleAddModal=()=>{
        setAdd(!add)
    }
    const handleDeletesModal=()=>{
        setDeletes(!deletes) 
    }

    return(
        <div className="season-view">
            <Sidebar />
            <main className="season-main-view">
                <TitleSection title="TEMPORADA" />
                <section className="section-bar-actions">
                    {/* <BeginEndBar /> */}
                    <ActionsBar handleAddModal={handleAddModal} handleDeleteModal={handleDeletesModal}/>
                </section>
                <TableSeason data={data} /> 
                {add && <AddSeasonModal handleOpenModal={handleAddModal} />}
                {deletes && <DeleteSeasonModal handleOpenModal={handleDeletesModal} />}
            </main>
        </div>
    )
}