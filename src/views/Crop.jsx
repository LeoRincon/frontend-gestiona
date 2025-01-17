import "./styles/crop.css";
import Sidebar from "./components/Sidebar";
import TitleMenu from "./components/TitleMenu";
import NotesActions from "./components/NotesActions";
import CultivoTable from "./components/CultivoTable";
import BackButton from "./components/BackButton";

export default function Crop() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container">
        <TitleMenu />
        <main>
          <NotesActions />
          <CultivoTable />
          <BackButton />
        </main>
      </div>
    </div>
  );
}
