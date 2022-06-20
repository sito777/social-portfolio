import React from "react";
import "../css/feed.css";
import ShareIdea from "../components/ShareIdea";
import ViewIdeas from "../components/ViewIdeas";

function App() {
  return (
    <div className="feed">
      <div className="feedHeader">
        <p>Home</p>
      </div>

      <ShareIdea />

      <ViewIdeas />
    </div>
  );
}

export default App;
