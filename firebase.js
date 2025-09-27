import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";
import { getMessaging } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";

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
export { 
  app, 
  db, 
  auth, 
  storage, 
  functions, 
  messaging, 
  analytics 
};

// Common Firebase utility functions
export const firebaseUtils = {
  // Authentication helpers
  signIn: async (email, password) => {
    import { signInWithEmailAndPassword } from "firebase/auth";
    return await signInWithEmailAndPassword(auth, email, password);
  },
  
  signOut: async () => {
    import { signOut } from "firebase/auth";
    return await signOut(auth);
  },
  
  // Storage helpers
  uploadFile: async (file, path) => {
    import { ref, uploadBytes } from "firebase/storage";
    const storageRef = ref(storage, path);
    return await uploadBytes(storageRef, file);
  },
  
  // Messaging helpers
  getMessagingToken: async (vapidKey) => {
    import { getToken } from "firebase/messaging";
    return await getToken(messaging, { vapidKey });
  },
  
  // Analytics helpers
  logEvent: (eventName, eventParams) => {
    import { logEvent } from "firebase/analytics";
    logEvent(analytics, eventName, eventParams);
  },
  
  // Functions helpers
  callFunction: async (functionName, data) => {
    import { httpsCallable } from "firebase/functions";
    const callableFunction = httpsCallable(functions, functionName);
    return await callableFunction(data);
  }
};
