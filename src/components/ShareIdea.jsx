import React from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import "../css/shareIdea.css";

function ShareIdea() {
  const sendTweet = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "feed"), {
      tweet: "testxxxje",
      timeStamp: serverTimestamp(),
    });
  };
  return (
    <div className="shareIdea">
      <div className="inputBox">
        <Avatar alt="Remy Sharp" src="" />
        <form onSubmit={sendTweet} action="submit">
          <div className="ideaInput">
            <input
              type="text"
              name="ideaInputField"
              placeholder="What do you think?"
            />
          </div>
          <Button className="ideaButton" type="submit" variant="outlined">
            Share
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ShareIdea;
