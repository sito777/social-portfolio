import React, { useEffect, useState } from "react";
import "../css/feed.css";
import ShareIdea from "../components/ShareIdea";
import ViewIdeas from "../components/ViewIdeas";
import db from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      const snapshot = await getDocs(collection(db, "idea's"));
      snapshot.forEach((doc) => {
        // console.log(doc.data());
        list.push(doc.data);
      });
      setIdeas(list);
    };
    fetchData();
  }, []);

  return (
    <div className="feed">
      <div className="feedHeader">
        <p>Home</p>
      </div>
      <ShareIdea />
      {ideas.map((idea) => (
        <ViewIdeas
          displayName={idea.displayName}
          username={idea.username}
          idea={idea.idea}
          img={idea.img}
          time={idea.time}
          profilePicture={idea.profilePicture}
        />
      ))}
    </div>
  );
}

export default App;
