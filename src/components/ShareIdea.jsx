import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import "../css/shareIdea.css";

function ShareIdea({ sendIdea }) {
  const [shareIdea, setShareIdea] = useState("");
  const [ideaImg, setIdeaImg] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    sendIdea(shareIdea, ideaImg);

    setShareIdea("");
    setIdeaImg("");
  };

  return (
    <div className="shareIdea">
      <div className="inputBox">
        <Avatar alt="Remy Sharp" src="" />
        <form onSubmit={sendIdea} action="submit">
          <div className="ideaInput">
            <input
              onChange={(e) => setShareIdea(e.target.value)}
              value={shareIdea}
              type="text"
              name="ideaInputField"
              placeholder="What do you think?"
            />
            <div className="ideaInput">
              <input
                onChange={(e) => setIdeaImg(e.target.value)}
                value={ideaImg}
                type="text"
                name="ideaImgField"
                placeholder="Upload img url"
              />
            </div>
          </div>
          <Button
            onClick={handleClick}
            className="ideaButton"
            type="submit"
            variant="outlined"
          >
            Share
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ShareIdea;
