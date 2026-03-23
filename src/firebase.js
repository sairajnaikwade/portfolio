// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Helper to detect whether config is filled.
const isConfigValid = Object.values(firebaseConfig).every((value) => typeof value === "string" && value.length > 0);

let app;
let auth;
let db;
let loginWithGoogle = () => Promise.reject(new Error("Firebase not configured"));
let logout = () => Promise.resolve();
export const firebaseEnabled = isConfigValid;

if (isConfigValid) {
  try {
    app = initializeApp(firebaseConfig);

    // Auth
    auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    loginWithGoogle = () => signInWithPopup(auth, provider);
    logout = () => signOut(auth);

    // Firestore
    db = getFirestore(app);
  } catch (error) {
    console.warn("Firebase initialization failed:", error);
  }
} else {
  console.warn("Firebase is not configured. Chat features are disabled.");
}

export { auth, db, loginWithGoogle, logout };
