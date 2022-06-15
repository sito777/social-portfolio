import React from "react";
import SidebarItem from "./SidebarItem";
import "../css/sidebar.css";
// import HomeIcon from "@material-ui/icons/Home";

function Sidebar() {
  return (
    <div className="sidebar">
      <p>
        <b>LOGO</b>
      </p>
      <SidebarItem text="Home" />
      <SidebarItem text="Explore" />
      <SidebarItem text="Notifications" />
      <SidebarItem text="Logout" />
    </div>
  );
}

export default Sidebar;
