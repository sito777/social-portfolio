import React from "react";
import "../css/sideColum.css";
import SearchIcon from "@mui/icons-material/Search";

function SideColum() {
  return (
    <div className="sideColum">
      <div className="search">
        <SearchIcon className="icon" />
        <input type="text" placeholder="Search Idea's" />
      </div>
      <div className="trend">
        <h3>Trends</h3>
        <div className="trendItem">
          <p className="trendNumber">1 - Worldwide trending</p>
          <p className="trendHashtag">#brocoli</p>
          <p className="trendQuatity">400 idea's</p>
        </div>
        <div className="trendItem">
          <p className="trendNumber">2 - Worldwide trending</p>
          <p className="trendHashtag">#Vasaline</p>
          <p className="trendQuatity">345 idea's</p>
        </div>
        <div className="trendItem">
          <p className="trendNumber">3 - Worldwide trending</p>
          <p className="trendHashtag">#Juice</p>
          <p className="trendQuatity">324 idea's</p>
        </div>
      </div>
    </div>
  );
}

export default SideColum;
