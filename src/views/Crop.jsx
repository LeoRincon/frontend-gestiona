import "./styles/crop.css";
import Sidebar from "./components/Sidebar";
import TitleMenu from "./components/TitleMenu";
import NotesActions from "./components/NotesActions";
import CultivoTable from "./components/CultivoTable";
import BackButton from "./components/BackButton";
import { useEffect, useState } from "react";
import { fetchCrops } from "../services/cropService";

export default function Crop() {
  const [crops, setCrops] = useState([]);
  

  useEffect(() => {
    const getCrops = async ( ) => {
      const data = await fetchCrops();
      setCrops(data)
    }

    getCrops();
}, []);
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container">
        <TitleMenu />
        <main>
          <NotesActions />
          <CultivoTable dataTable={crops}/>
          <BackButton />
        </main>
      </div>
    </div>
  );
}
