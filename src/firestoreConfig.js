// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjJibD1KH4mxrfa_rkeAgCgaEewzjOxCM",
  authDomain: "allay-8aa0e.firebaseapp.com",
  databaseURL: "https://allay-8aa0e-default-rtdb.firebaseio.com",
  projectId: "allay-8aa0e",
  storageBucket: "allay-8aa0e.appspot.com",
  messagingSenderId: "18027640746",
  appId: "1:18027640746:web:5fd4f45335ab86f5225dd3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
