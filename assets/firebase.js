// AutoPulse Firebase initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-analytics.js";

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

// Analytics is only initialized in supported browser environments.
isSupported()
  .then((supported) => {
    if (supported) getAnalytics(app);
  })
  .catch((error) => {
    console.warn("Firebase Analytics could not be initialized:", error);
  });

export { app };
