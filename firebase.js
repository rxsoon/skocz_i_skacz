import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCdkQI4jWNCO5JYY728vOh4x23olZ8TA0E",
  authDomain: "skocziskacz.firebaseapp.com",
  projectId: "skocziskacz",
  storageBucket: "skocziskacz.firebasestorage.app",
  messagingSenderId: "551083199205",
  appId: "1:551083199205:web:72cf57b27d390e51fca20c",
  measurementId: "G-2GF9HZE3BQ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);