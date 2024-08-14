import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjJy0VjUV5NPmlcH6b1AUn9TQsrU3sZN4",
  authDomain: "paw-pet-d5680.firebaseapp.com",
  projectId: "paw-pet-d5680",
  storageBucket: "paw-pet-d5680.appspot.com",
  messagingSenderId: "974816987935",
  appId: "1:974816987935:web:893413fa344974d987fe2a",
  measurementId: "G-JSJCP8NNF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
