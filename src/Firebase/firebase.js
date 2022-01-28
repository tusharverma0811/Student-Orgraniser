import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXa3Ym3ckUwAlOp7Lthmes8Kk9W9KQzeE",
  authDomain: "student-organiser-94ed3.firebaseapp.com",
  projectId: "student-organiser-94ed3",
  storageBucket: "student-organiser-94ed3.appspot.com",
  messagingSenderId: "425908924897",
  appId: "1:425908924897:web:2d3379b0a434b1b4d722a0",
  measurementId: "G-7K29XESLBK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
