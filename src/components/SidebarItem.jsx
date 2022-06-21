import React from "react";

function SidebarItem({ active, text, Icon }) {
  return (
    // <Link to={link}>
    <div className={`sidebarItem ${active && "sidebarItem--active"}`}>
      <Icon />
      <h3>{text}</h3>
    </div>
    // </Link>
  );
}

export default SidebarItem;
