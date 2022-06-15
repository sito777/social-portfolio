import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import Sidebar from "../components/Sidebar";
import { db } from "../firebase/firebaseConfig";

function App() {
  const sendTweet = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "feed"), {
      tweet: "testxxxje",
      timeStamp: serverTimestamp(),
    });
  };
  return (
    <>
      <Sidebar />
      <h1 className="text-3xl font-bold underline">Hello Feed!</h1>
      <form onSubmit={sendTweet} action="submit">
        <button type="submit">Tweet</button>
      </form>
    </>
  );
}

export default App;
