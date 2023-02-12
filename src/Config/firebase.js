// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDNQgGS4toTS_79l3DrJKHSNfiWOJ8MRi8",
  authDomain: "hackathonecommerce.firebaseapp.com",
  projectId: "hackathonecommerce",
  storageBucket: "hackathonecommerce.appspot.com",
  messagingSenderId: "931574186599",
  appId: "1:931574186599:web:26dbf4c80843578b3acac2",
  measurementId: "G-F66D6WDR5K"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);