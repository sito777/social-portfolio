import React from "react";
import { Link } from "react-router-dom";

function SidebarItem({ active, text, link }) {
  return (
    // <Link to={link}>
    <div className={`sidebarItem ${active && "sidebarItem--active"}`}>
      {/* <Icon /> */}
      <h3>{text}</h3>
    </div>
    // </Link>
  );
}

export default SidebarItem;
