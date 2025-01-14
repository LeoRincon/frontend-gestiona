import Sidebar from "./components/Sidebar"
import TitleSection from "./components/TitleSection"
import BeginEndBar from "./components/BeginEndBar"
import AddSearchBar from "./components/AddSearchBar"
import TableSeason from "./components/TableSeason"

import "./season.css"

export default function Season(){
    return(
        <div className="season-view">
            <Sidebar />
            <main className="season-main-view">
                <TitleSection title="TEMPORADA" />
                <section>
                    <BeginEndBar />
                    <AddSearchBar />
                </section>
                <TableSeason />
            </main>
        </div>
    )
}