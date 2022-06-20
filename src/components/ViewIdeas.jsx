import React from "react";
import "../css/ViewIdeas.css";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";

function Post({ displayName, username, idea, img, profilePicture, time }) {
  return (
    <div className="idea">
      <div className="ideaBody">
        <div className="ideaHead">
          <div className="ideaProfilePicture">
            <Avatar alt="Remy Sharp" src="" />
          </div>
          <div className="ideaHeadText">
            <p className="ideaUsername">john doe</p>
            <p className="ideaDisplayName">@johndoing</p>
          </div>
        </div>
        <div className="ideaPost">
          <p className="test">asfasfsdfs</p>
        </div>
        <div className="ideaIMG">
          <img
            src="https://inspirelle.com/wp-content/uploads/2016/05/Website-img.jpg"
            alt=""
            className="image"
          />
        </div>
        <div className="ideaFooter">
          <FavoriteBorderIcon className="footerIcon" />
          <ChatBubbleOutlineIcon className="footerIcon" />
          <ShareIcon className="footerIcon" />
        </div>
      </div>
    </div>
  );
}

export default Post;
