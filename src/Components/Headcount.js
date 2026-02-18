import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database"; // For Realtime Database
import { getFirestore, doc, setDoc, onSnapshot } from "firebase/firestore"; // For Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWEk2V1h8_it38cgIzs4OiNhcF_US5CjA",
  authDomain: "tech2-c541c.firebaseapp.com",
  projectId: "tech2-c541c",
  storageBucket: "tech2-c541c.appspot.com",
  messagingSenderId: "659789496334",
  appId: "1:659789496334:web:1dd94d7edee2d0c674bc5f",
  measurementId: "G-K7733VN993",
  databaseURL: "https://tech2-c541c-default-rtdb.firebaseio.com/"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app); // Use this for Realtime Database
// Or for Firestore

