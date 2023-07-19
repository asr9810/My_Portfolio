
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBI0yq8C3aeLr_Knhu5IhjMt8Ivw6_Gzpk",
  authDomain: "react-portfolio-asr.firebaseapp.com",
  projectId: "react-portfolio-asr",
  storageBucket: "react-portfolio-asr.appspot.com",
  messagingSenderId: "952927422140",
  appId: "1:952927422140:web:6c0d93b41be47127e832b9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();