import Sidebar from "./components/Sidebar"
import TitleSection from "./components/TitleSection"
import BeginEndBar from "./components/BeginEndBar"
import ActionsBar from "./components/ActionsBar"
import TableSeason from "./components/TableSeason"
import AddSeasonModal from "./components/AddSeasonModal"
import EditSeasonModal from "./components/EditSeasonModal"
import DeleteSeasonModal from "./components/DeleteSeasonModal/DeleteSeasonModal"
import SearchSeasonModal from "./components/SearchSeasonModal"
import { 
    fetchSeasons, createSeason, editSeason, deleteSeason, fetchCrops, fetchNews 
} from "../services/seasonServices"
import { useState, useEffect, useRef } from "react"

import "./styles/season.css"

export default function Season(){
    const [add,setAdd] = useState(false)
    const [edit,setEdit] = useState(false)
    const [deletes,setDeletes] = useState(false)
    const [search,setSearch]= useState(false)
    const [data,setData]=useState()
    const [dataSearch,setDataSearch] = useState(null)
    const [cropsData,setCropsData]=useState()
    const [newsData,setNewsData]=useState()
    const id = useRef(null)

    useEffect(()=>{
        fetchData();
        fetchDataCrops();
        fetchDataNews();
    },[])

    async function fetchData(){
            try {
                const result = await fetchSeasons()
                setData(result);
            } catch (error) {
                console.error('Error fetching season data(F):', error);
            }
        };

    async function fetchDataCrops(){
            try {
                const result = await fetchCrops()
                setCropsData(result);
            } catch (error) {
                console.error('Error fetching crops data(F):', error);
            }
        };

    async function fetchDataNews(){
            try {
                const result = await fetchNews()
                setNewsData(result);
            } catch (error) {
                console.error('Error fetching news data(F):', error);
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

    const handleAddFetch=async(season)=>{
        const response = await createSeason(season)
        fetchData()
        handleAddModal()
    }

    const handleEditFetch =async(season)=>{
        const result = await editSeason(id.current,season)
        fetchData()
        handleEditModal()
    }
    
        const handleDeleteFecth= async()=>{
            await deleteSeason(id.current)
            fetchData()
            handleDeletesModal()
            id.current=null
        }

        const handleSearch=(registerSearch)=>{
            setDataSearch(registerSearch)
            handleSearchModal()
        }

    return(
        <div className="season-view">
            <Sidebar />
            <main className="season-main-view">
                <TitleSection title="TEMPORADA" />

                <section className="section-bar-actions">
                    {/* <BeginEndBar /> */}
                    <ActionsBar 
                     handleAddModal={handleAddModal} 
                     handleEditModal={handleEditModal}  
                     handleDeleteModal={handleDeletesModal}
                     handleSearchModal={handleSearchModal}
                     dataSearch={dataSearch}
                     setDataSearch={setDataSearch} />
                </section>

                <TableSeason
                 data={data}
                 handleSelectedData={handleSelectedData}
                 dataSearch={dataSearch} /> 

                {add && <AddSeasonModal
                 handleOpenModal={handleAddModal}
                 handleAddFetch={handleAddFetch} 
                 cropsData={cropsData}
                 newsData={newsData} 
                 completeData={data} />}

                {edit && <EditSeasonModal
                 handleEditModal={handleEditModal}
                 handleEditFetch={handleEditFetch}
                 id={id.current} completeData={data}
                 cropsData={cropsData} 
                 newsData={newsData} /> }

                {deletes && <DeleteSeasonModal
                 handleOpenModal={handleDeletesModal}
                 handleDeleteFecth={handleDeleteFecth}
                 id={id.current} />}

                 {search && <SearchSeasonModal 
                 dataName={data} 
                 handleSearchModal={handleSearchModal} 
                 handleSearch={handleSearch} /> }
            </main>
        </div>
    )
}