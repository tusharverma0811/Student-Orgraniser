import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC36xiM0yKgeQrn5D-vmzC2lAGTlMHZQ3g",
  authDomain: "student-organiser-44260.firebaseapp.com",
  projectId: "student-organiser-44260",
  storageBucket: "student-organiser-44260.appspot.com",
  messagingSenderId: "880526202453",
  appId: "1:880526202453:web:4e00f673854c5eec71a6dc",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);

const provider = new GoogleAuthProvider();

export const onGoogleSignIn = () => {
  signInWithPopup(authentication, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
      console.log(result);
      console.log(token);
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      const email = error.email;

      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error);
      console.log(errorCode);
      console.log(errorMessage);
      console.log(email);
      console.log(credential);
    });
};
