import React from "react";
import "./style.css";
import { getDocs, collection, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";

function App() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
