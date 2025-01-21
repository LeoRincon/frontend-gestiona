import Sidebar from "./components/Sidebar"
import TitleSection from "./components/TitleSection"
import BeginEndBar from "./components/BeginEndBar"
import ActionsBar from "./components/AddSearchBar"
import TableSeason from "./components/TableSeason"

import "./styles/season.css"

export default function Season(){
    return(
        <div className="season-view">
            <Sidebar />
            <main className="season-main-view">
                <TitleSection title="TEMPORADA" />
                <section>
                    <BeginEndBar />
                    <ActionsBar />
                </section>
                <TableSeason />
            </main>
        </div>
    )
}