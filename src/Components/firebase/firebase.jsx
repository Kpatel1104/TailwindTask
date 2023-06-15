import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6eh9uTUQBEThj0lA4gmkdU-Re1JvLG6Q",
  authDomain: "media-9b908.firebaseapp.com",
  projectId: "media-9b908",
  storageBucket: "media-9b908.appspot.com",
  messagingSenderId: "133546842435",
  appId: "1:133546842435:web:87803e394631207c85b7f6",
  measurementId: "G-RVBVXG9RXQ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
