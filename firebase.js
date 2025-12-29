// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, signOut as firebaseSignOut } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getMessaging, getToken } from "firebase/messaging";
import { getAnalytics, logEvent } from "firebase/analytics";

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

// Initialize all Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const functions = getFunctions(app);
const messaging = getMessaging(app);
const analytics = getAnalytics(app);

// Export all services
export { app, db, auth, storage, functions, messaging, analytics };

// Firebase utility functions
export const firebaseUtils = {
  // Authentication
  signIn: (email, password) => signInWithEmailAndPassword(auth, email, password),
  signOut: () => firebaseSignOut(auth),

  // Storage
  uploadFile: (file, path) => {
    const storageRef = ref(storage, path);
    return uploadBytes(storageRef, file);
  },

  // Messaging
  getMessagingToken: (vapidKey) => getToken(messaging, { vapidKey }),

  // Analytics
  logEvent: (eventName, eventParams) => logEvent(analytics, eventName, eventParams),

  // Functions
  callFunction: (functionName, data) => httpsCallable(functions, functionName)(data)
};
