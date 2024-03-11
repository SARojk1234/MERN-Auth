// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-4d201.firebaseapp.com",
  projectId: "mern-auth-4d201",
  storageBucket: "mern-auth-4d201.appspot.com",
  messagingSenderId: "254685965764",
  appId: "1:254685965764:web:5a56a914e953f92e46c891"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);