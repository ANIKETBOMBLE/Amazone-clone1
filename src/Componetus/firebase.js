// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiF9vkeFd0dat--koM2C3JRLToIeYOUfo",
  authDomain: "clone-cc01a.firebaseapp.com",
  projectId: "clone-cc01a",
  storageBucket: "clone-cc01a.firebasestorage.app",
  messagingSenderId: "1056234125709",
  appId: "1:1056234125709:web:e3bbd08ab4748a4fc4e5c4",
  measurementId: "G-T4X9HD4W1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Auth service

// Optional: Analytics setup
let analytics;
isSupported().then((yes) => {
  if (yes) {
    analytics = getAnalytics(app);
  }
});

// Export named services
export { app, auth, analytics };
