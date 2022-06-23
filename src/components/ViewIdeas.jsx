import React from "react";
import "../css/ViewIdeas.css";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import { doc, deleteDoc, setDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import AlertDialog from "./UpdateIdea";
import UpdateIdea from "./UpdateIdea";

function Post({ idea }) {
  const { displayName, username, img, profilePicture, id } = idea;

  const deleteIdea = async () => {
    await deleteDoc(doc(db, "idea's", id));
  };

  // const updateIdea = async (ideetje, imgtje) => {
  //   await setDoc(doc(db, "idea's", id), { idea: ideetje, img: imgtje });
  // };

  return (
    <div className="idea">
      <div className="ideaBody">
        <div className="ideaHead">
          <div className="ideaProfilePicture">
            <Avatar alt="Remy Sharp" src={profilePicture} />
          </div>
          <div className="ideaHeadText">
            <p className="ideaUsername">{username}</p>
            <p className="ideaDisplayName">@{displayName}</p>
          </div>
        </div>
        <div className="ideaPost">
          <p className="test">{idea.idea}</p>
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
          <button type="button" onClick={UpdateIdea}>
            <AlertDialog id={id} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
