import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import Sidebar from "../components/Sidebar";
import { db } from "../firebase/firebaseConfig";
import {} from "../css/feed.css";

function App() {
  const sendTweet = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "feed"), {
      tweet: "testxxxje",
      timeStamp: serverTimestamp(),
    });
  };
  return (
    <div className="feed">
      <div className="feedHeader">Home</div>

      {/* <ShareIdea/ > */}
      {/* <ViewIdeas/ > */}
      <h1 className="text-3xl font-bold underline">Hellso Feed!</h1>
      <form onSubmit={sendTweet} action="submit">
        <button type="submit">Tweet</button>
      </form>
    </div>
  );
}

export default App;
