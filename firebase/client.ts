// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgWwlwnVPqVjU4VJWVWTRlqvv58eKcCVk",
  authDomain: "intelliview-601e0.firebaseapp.com",
  projectId: "intelliview-601e0",
  storageBucket: "intelliview-601e0.firebasestorage.app",
  messagingSenderId: "384250031712",
  appId: "1:384250031712:web:015930dc899aa576badd05",
  measurementId: "G-QG82SPDPEE"
};

// Initialize Firebase
const app = !getApps.length?initializeApp(firebaseConfig): getApp();

export const auth=getAuth(app);
export const db=getFirestore(app)