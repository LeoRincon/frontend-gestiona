import "./styles/crop.css";
import Sidebar from "./components/Sidebar";
import TitleMenu from "./components/TitleMenu";
import CultivoTable from "./components/CultivoTable";
import BackButton from "./components/BackButton";
import { useEffect, useRef, useState } from "react";
import { createCrop, fetchCrops } from "../services/cropService";
import AddButton from "./components/addButton";
import AddCropModal from "./components/AddCropModal/intex";
import { fetchUnits } from "../services/unitService";
import { addCropToProject } from "../utils/updateSessionStorage";

export default function Crop() {
  const [crops, setCrops] = useState([]);
  const [units, setUnits] = useState([]);

  const cropModalRef = useRef(null);

  const buttonSize = 30;

  useEffect(() => {
    const getCrops = async () => {
      const data = await fetchCrops();
      setCrops(data);
    };

    const getUnits = async () => {
      try {
        const unitsData = await fetchUnits();
        setUnits(unitsData);
      } catch (error) {
        console.error("Error fetch units", error);
      }
    };

    getUnits();
    getCrops();
  }, []);

  const handleOpenModal = () => {
    cropModalRef.current.showModal();
  };
  const handleCloseModal = () => {
    cropModalRef.current.close();
  };
  const handleSubmitModal = async (data) => {
    const { unidad, ...newCrop } = data;

    const unit = units.find((unit) => unit.unidad === unidad);
    newCrop["id_unidad_medida"] = unit.id;

    try {
      const response = await createCrop(newCrop);
      console.log("Create Crop", response);
      response.id = crops.length + 1;
      setCrops((prevCrops) => [...prevCrops, response]);
      //Actualizar el session storage
      addCropToProject(response);
    } catch (error) {
      console.error("Error Creating Crop", error);
    }
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container">
        <TitleMenu />
        <main className="content-container__crop">
          <div className="content-container__crop__buttons">
            <BackButton />
            <AddButton
              onClick={handleOpenModal}
              iconWidth={buttonSize}
              iconHeight={buttonSize}
            />
          </div>
          <CultivoTable dataTable={crops} setDataTable={setCrops} />
          <AddCropModal
            ref={cropModalRef}
            onSubmit={handleSubmitModal}
            onClose={handleCloseModal}
            title={"Añadir Cultivo"}
            units={units}
          />
        </main>
      </div>
    </div>
  );
}
