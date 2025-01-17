import ActivityIcon from '../icons/ActivityIcon';
import CropIcon from '../icons/CropIcon';
import DashboardIcon from '../icons/DashboardIcon';
import InventoryIcon from '../icons/inventoryIcon';
import InformationIcon from '../icons/InformationIcon';
import LogoutIcon from '../icons/LogoutIcon'
import ProductionIcon from '../icons/ProductionIcon';
import SaleIcon from '../icons/SaleIcon';
import SeasonIcon from '../icons/SeasonIcon';
import SidebarHeader from '../SidebarHeader';
import SettingsIcon from '../icons/SettingsIcon';
import SidebarNav from '../SidebarNav';

import './styles.css'
import SidebarLink from '../SidebarLink';
import SidebarFooter from '../SidebarFooter';

function Sidebar (){
  const iconWidth = 24
  const iconHeigth = 24
  const iconFill = "#008164"
  const messages = {
    crop: "Cultivo",
    season: "Temporada",
    inventory: "Inventario",
    activities: "Actividades",
    production: "Producción",
    sales: "Ventas",
    information: "Información",
    dashboard: "Dashboard",
    settings: "Configuración",
    logout: "Cerrar Sesión",
    sectionCrops: "Gestión de Cultivos",
    sectionMetrics: "Métricas",
    username: "John Doe",
    email: "john.doe@example.com"
  }

  return (  
  <aside className="sidebar">
    <SidebarHeader />
    <SidebarNav className="sidebar__overwiew" title={messages.sectionCrops} >
      <SidebarLink 
        href="#"
        IconComponent={CropIcon} 
        iconWidth={iconWidth} 
        iconHeight={iconHeigth} 
        iconStroke={iconFill} 
        text={messages.crop}
      />
      <SidebarLink 
        href="#"
        IconComponent={SeasonIcon} 
        iconWidth={iconWidth} 
        iconHeight={iconHeigth} 
        iconFill={iconFill} 
        text={messages.season}
      />
      <SidebarLink 
        href="#"
        IconComponent={InventoryIcon} 
        iconWidth={iconWidth} 
        iconHeight={iconHeigth} 
        iconFill={iconFill} 
        text={messages.inventory}
      />
      <SidebarLink 
        href="#"
        IconComponent={ActivityIcon} 
        iconWidth={iconWidth} 
        iconHeight={iconHeigth} 
        iconFill={iconFill} 
        text={messages.activities}
      />
      <SidebarLink 
        href="#"
        IconComponent={ProductionIcon} 
        iconWidth={iconWidth} 
        iconHeight={iconHeigth} 
        iconStroke={iconFill} 
        text={messages.production}
      />
      <SidebarLink 
        href="#"
        IconComponent={SaleIcon} 
        iconWidth={iconWidth} 
        iconHeight={iconHeigth} 
        iconFill={iconFill} 
        text={messages.sales}
      />
    </SidebarNav>
    <SidebarNav className="sidebar__overwiew" title={messages.sectionMetrics} >
      <SidebarLink 
        href="#"
          IconComponent={InformationIcon} 
          iconWidth={iconWidth} 
          iconHeight={iconHeigth} 
          iconFill={iconFill} 
          text={messages.information}
        />
      <SidebarLink 
        href="#"
          IconComponent={DashboardIcon} 
          iconWidth={iconWidth} 
          iconHeight={iconHeigth} 
          iconFill={iconFill} 
          text={messages.dashboard}
        />
    </SidebarNav>
    <SidebarNav className="sidebar__account" title={"Cuenta"}>
      <SidebarLink 
        href="#"
        IconComponent={SettingsIcon} 
        iconWidth={iconWidth} 
        iconHeight={iconHeigth} 
        iconFill={iconFill} 
        text={messages.settings}
      />
      <SidebarLink 
        href="#"
        IconComponent={LogoutIcon} 
        iconWidth={iconWidth} 
        iconHeight={iconHeigth} 
        iconFill={iconFill} 
        text={messages.logout}
      />
    </SidebarNav>
    <SidebarFooter username={messages.username} email={messages.email} />
  </aside>
   )
  }

export default Sidebar;