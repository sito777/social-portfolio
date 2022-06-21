import React from "react";
import "../css/ViewIdeas.css";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { doc, deleteDoc } from "firebase/firestore";

function Post({ displayName, username, idea, img, profilePicture, time }) {
  const deleteIdea = async () => {
    await deleteDoc(doc(db, "idea's"));
  };

  return (
    <div className="idea">
      <div className="ideaBody">
        <div className="ideaHead">
          <div className="ideaProfilePicture">
            <Avatar alt="Remy Sharp" src={profilePicture} />
          </div>
          <div className="ideaHeadText">
            <p className="ideaUsername">{username}</p>
            <p className="ideaDisplayName">
              @{displayName} - {time}
            </p>
          </div>
        </div>
        <div className="ideaPost">
          <p className="test">{idea}</p>
        </div>
        <div className="ideaIMG">
          <img src={img} alt="" className="image" />
        </div>
        <div className="ideaFooter">
          <FavoriteBorderIcon className="footerIcon" />
          <ChatBubbleOutlineIcon className="footerIcon" />
          <ShareIcon className="footerIcon" />
          <button type="button" onClick={deleteIdea}>
            <DeleteIcon className="footerIcon" />
          </button>
          {/* <UpdateIcon className="footerIcon" onClick={updateIdea} /> */}
        </div>
      </div>
    </div>
  );
}

export default Post;
