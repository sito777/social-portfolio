import React, { useEffect, useState } from "react";
import "../css/feed.css";
import ShareIdea from "../components/ShareIdea";
import ViewIdeas from "../components/ViewIdeas";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function App() {
  const [ideas, setIdeas] = useState([]);

  const sendIdea = async (shareIdea, ideaImg) => {
    await addDoc(collection(db, "idea's"), {
      displayName: "Jelly",
      username: "JellyFish",
      idea: shareIdea,
      img: ideaImg,
      time: serverTimestamp(),
      profilePicture:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      const snapshot = await getDocs(collection(db, "idea's"));
      snapshot.forEach((doc) => {
        // console.log(doc.data());
        list.push({ ...doc.data(), id: doc.id });
      });
      setIdeas(list);
    };
    fetchData();
  }, [sendIdea]);

  return (
    <div className="feed">
      <div className="feedHeader">
        <p>Home</p>
      </div>
      <ShareIdea sendIdea={sendIdea} />
      {ideas.map((idea, counter) => (
        <ViewIdeas key={counter} idea={idea} />
      ))}
    </div>
  );
}

export default App;
