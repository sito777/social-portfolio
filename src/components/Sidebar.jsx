import React from "react";
import SidebarItem from "./SidebarItem";
import "../css/sidebar.css";
// import HomeIcon from "@material-ui/icons/Home";

function Sidebar() {
  return (
    <header className="sidebar">
      <p className="logo">
        <b>LOGO</b>
      </p>
      <SidebarItem active text="Home" />
      <SidebarItem text="Explore" />
      <SidebarItem text="Notifications" />
      <SidebarItem text="Logout" />
    </header>
  );
}

export default Sidebar;
