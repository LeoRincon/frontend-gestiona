import TitleSection from "./components/TitleSection"
import AddSearchBar from "./components/AddSearchBar"
import TableInventory from "./components/TableInventory"
import Sidebar from "./components/Sidebar"


import "./inventory.css"

export default function Inventory(){
    const iconParams = {
        width: 50,
        height: 50,
        fill: "#193c32",
    }
    return (
        <div className="inventory-view">
            <Sidebar />
            <main className="inventory-main-view">
                <TitleSection title="INVENTARIO DE INSUMOS" />
                <AddSearchBar />
                <TableInventory />
            </main>
        </div>
    )
}
