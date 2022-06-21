// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "no-sql-ed857.firebaseapp.com",
  projectId: "no-sql-ed857",
  storageBucket: "no-sql-ed857.appspot.com",
  messagingSenderId: "239180824596",
  appId: "1:239180824596:web:cefb8b2d47e1b388e7a701",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const db = getFirestore(app);

export default db;
