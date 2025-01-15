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

function InitialSidebar() {
  const { settings, logout, username, email } = messages;

  return (
    <aside className="sidebar">
      <SidebarHeader showButton={false} />
      <SidebarNav className="sidebar__account" title={"Cuenta"}>
        <SidebarLink
          href="#"
          IconComponent={SettingsIcon}
          iconWidth={iconWidth}
          iconHeight={iconHeigth}
          iconFill={iconFill}
          text={settings}
        />
        <SidebarLink
          href="#"
          IconComponent={LogoutIcon}
          iconWidth={iconWidth}
          iconHeight={iconHeigth}
          iconFill={iconFill}
          text={logout}
        />
      </SidebarNav>
      <SidebarFooter username={username} email={email} />
    </aside>
  );
}

export default InitialSidebar;
