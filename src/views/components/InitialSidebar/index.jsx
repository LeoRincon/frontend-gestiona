import SidebarHeader from "../SidebarHeader";
import SidebarFooter from "../SidebarFooter";
import SidebarLink from "../SidebarLink";
import SidebarNav from "../SidebarNav";
import SettingsIcon from "../icons/SettingsIcon";
import LogoutIcon from "../icons/LogoutIcon";
import {
  iconFill,
  iconWidth,
  iconHeigth,
  messages,
} from "../../../utils/const";

import "./styles.css";

function InitialSidebar({ userData }) {
  const { settings, logout } = messages;
  let { name, email } = userData;

  if (!userData || Object.keys(userData).length === 0) {
    name = "No disponible";
    email = "Correo No disponible";
  }

  return (
    <aside className="sidebar">
      <SidebarHeader showButton={false} />
      <SidebarNav className="sidebar__account" title={"Cuenta"}>
        <SidebarLink
          href="/settings"
          IconComponent={SettingsIcon}
          iconWidth={iconWidth}
          iconHeight={iconHeigth}
          iconFill={iconFill}
          text={settings}
        />
        <SidebarLink
          href="/logout"
          IconComponent={LogoutIcon}
          iconWidth={iconWidth}
          iconHeight={iconHeigth}
          iconFill={iconFill}
          text={logout}
        />
      </SidebarNav>
      <SidebarFooter username={name} email={email} />
    </aside>
  );
}

export default InitialSidebar;
