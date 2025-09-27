import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwWqkn2fY0ibA2dwib6hP2YcfdbMp1bRQ",
  authDomain: "mwt-assistant-92593.firebaseapp.com",
  databaseURL: "https://mwt-assistant-92593-default-rtdb.firebaseio.com",
  projectId: "mwt-assistant-92593",
  storageBucket: "mwt-assistant-92593.firebasestorage.app",
  messagingSenderId: "233603868776",
  appId: "1:233603868776:web:61a74b6ba8d715df8373dd",
  measurementId: "G-STD2HQBK36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { app, db };
