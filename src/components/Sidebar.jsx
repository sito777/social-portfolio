import React from "react";
import SidebarItem from "./SidebarItem";
import "../css/sidebar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";

function Sidebar() {
  return (
    <header className="sidebar">
      <p className="logo">
        <b>LOGO</b>
      </p>
      <SidebarItem active text="Home" Icon={HomeIcon} />
      <SidebarItem text="Explore" Icon={ExploreIcon} />
      <SidebarItem text="Notifications" Icon={NotificationsIcon} />
      <SidebarItem text="Logout" Icon={LogoutIcon} />
    </header>
  );
}

export default Sidebar;
