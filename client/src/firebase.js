<<<<<<< HEAD
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

// Replace with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9WjmU2I7xhLs-jln2eFJ7q66D2QRuDx0",
  authDomain: "agri-project-e80fc.firebaseapp.com",
  databaseURL: "https://agri-project-e80fc-default-rtdb.asia-southeast1.firebasedatabase.app", // Ensure this URL is correct
  projectId: "agri-project-e80fc",
  storageBucket: "agri-project-e80fc.appspot.com",
  messagingSenderId: "428761946011",
  appId: "1:428761946011:web:1f2975b9bfa6cfcc3bf33e",
  measurementId: "G-LLZSC9JQBN"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const db = getDatabase(app);

export default db;
=======
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

// Replace with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9WjmU2I7xhLs-jln2eFJ7q66D2QRuDx0",
  authDomain: "agri-project-e80fc.firebaseapp.com",
  databaseURL: "https://agri-project-e80fc-default-rtdb.asia-southeast1.firebasedatabase.app", // Ensure this URL is correct
  projectId: "agri-project-e80fc",
  storageBucket: "agri-project-e80fc.appspot.com",
  messagingSenderId: "428761946011",
  appId: "1:428761946011:web:1f2975b9bfa6cfcc3bf33e",
  measurementId: "G-LLZSC9JQBN"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const db = getDatabase(app);

export default db;
>>>>>>> 76a5987 (second commit)
