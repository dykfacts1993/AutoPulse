// AutoPulse Firebase initialization for GitHub Pages
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDEPy0sfd7zDklbiBKvXZGHLXr2mPXmrzg",
  authDomain: "autopulse-ea426.firebaseapp.com",
  projectId: "autopulse-ea426",
  storageBucket: "autopulse-ea426.firebasestorage.app",
  messagingSenderId: "708192826162",
  appId: "1:708192826162:web:b7d231089b7d697f769d2b",
  measurementId: "G-QSG588EKFB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Expose the modular SDK to the existing non-module app.js without converting
// the full application to ES modules.
window.AutoPulseFirebase = {
  app, auth, db, GoogleAuthProvider, signInWithPopup, signOut,
  onAuthStateChanged, doc, getDoc, setDoc, onSnapshot
};

isSupported()
  .then((supported) => {
    if (supported) getAnalytics(app);
  })
  .catch((error) => {
    console.warn("Firebase Analytics could not be initialized:", error);
  });

export { app, auth, db };
