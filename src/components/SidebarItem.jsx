import React from "react";

function SidebarItem({ text }) {
  return (
    <div className="SidebarItem">
      {/* <Icon /> */}
      <h3>{text}</h3>
    </div>
  );
}

export default SidebarItem;
