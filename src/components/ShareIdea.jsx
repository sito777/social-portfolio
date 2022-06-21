import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import "../css/shareIdea.css";

function ShareIdea() {
  const [shareIdea, setShareIdea] = useState("");
  const [ideaImg, setIdeaImg] = useState("");

  const sendIdea = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "idea's"), {
      displayName: "Jelly",
      username: "JellyFish",
      idea: shareIdea,
      img: ideaImg,
      time: serverTimestamp(),
      profilePicture:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    });

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
            onClick={sendIdea}
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
