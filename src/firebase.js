// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQsiTf7HbK0srmgZbQGZKFtsXY8bp3v9k",
  authDomain: "to-do-app-3a82c.firebaseapp.com",
  projectId: "to-do-app-3a82c",
  storageBucket: "to-do-app-3a82c.appspot.com",
  messagingSenderId: "1056357779108",
  appId: "1:1056357779108:web:17925191de6e427a528831"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)