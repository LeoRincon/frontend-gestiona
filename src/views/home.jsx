import Card from "./components/Card";
import ActivityIcon from "./components/icons/ActivityIcon";
import CropIcon from "./components/icons/CropIcon";
import DashboardIcon from "./components/icons/DashboardIcon";
import InformationIcon from "./components/icons/InformationIcon";
import InventoryIcon from "./components/icons/inventoryIcon";
import ProductionIcon from "./components/icons/ProductionIcon";
import SaleIcon from "./components/icons/SaleIcon";
import SeasonIcon from "./components/icons/SeasonIcon";
import OptionMenu from "./components/OptionMenu";
import Sidebar from "./components/Sidebar";

import "./styles/home.css";

export default function Home() {
  const iconParams = {
    width: 50,
    height: 50,
    fill: "#193c32",
  };

  const paths = {
    cropt: "/crop",
    season: "/season",
    inventory: "/supply",
    activity: "/activity",
    production: "/production",
    sale: "/sales",
    information: "/information",
    dashboard: "/dashboard",
    }

  return (
    <div className="home-view">
      <Sidebar />
      <main className="page-container">
        <OptionMenu title={"GESTIÓN CULTIVOS"}>
          <Card
            IconComponent={CropIcon}
            iconWidth={iconParams.width}
            iconHeight={iconParams.height}
            iconStroke={iconParams.fill}
            title={"Cultivo"}
            href={paths.cropt}
          />
          <Card
            IconComponent={SeasonIcon}
            iconWidth={iconParams.width}
            iconHeight={iconParams.height}
            iconFill={iconParams.fill}
            title={"Temporada"}
            href={paths.season}
          />
          <Card
            IconComponent={InventoryIcon}
            iconWidth={iconParams.width}
            iconHeight={iconParams.height}
            iconFill={iconParams.fill}
            title={"Inventario de Insumos"}
            href={paths.inventory}
          />
          <Card
            IconComponent={ActivityIcon}
            iconWidth={iconParams.width}
            iconHeight={iconParams.height}
            iconFill={iconParams.fill}
            title={"Registro de Actividades"}
            href={paths.activity}
          />
          <Card
            IconComponent={ProductionIcon}
            iconWidth={iconParams.width}
            iconHeight={iconParams.height}
            iconStroke={iconParams.fill}
            title={"Registro de Producción"}
            href={paths.production}
          />
          <Card
            IconComponent={SaleIcon}
            iconWidth={iconParams.width}
            iconHeight={iconParams.height}
            iconFill={iconParams.fill}
            title={"Registro de Ventas"}
            href={paths.sale}
          />
        </OptionMenu>
        <OptionMenu title={"MÉTRICAS"}>
          <Card
            IconComponent={InformationIcon}
            iconWidth={iconParams.width}
            iconHeight={iconParams.height}
            iconFill={iconParams.fill}
            title={"Información"}
            href={paths.information}
          />
          <Card
            IconComponent={DashboardIcon}
            iconWidth={iconParams.width}
            iconHeight={iconParams.height}
            iconFill={iconParams.fill}
            title={"Dashboard"}
            href={paths.dashboard}
          />
        </OptionMenu>
      </main>
    </div>
  );
}
