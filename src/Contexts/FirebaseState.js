import React from 'react';
import FirebaseContext from './FirebaseContext';
import { auth } from '../Firebase/firebase';
import { signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail   } from "firebase/auth";

const FirebaseState = (props)=>{

    const firebaseSignup = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const firebaseLogin = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleSignin = ()=>{
        const provider = new GoogleAuthProvider();

        return signInWithPopup(auth,provider);
    }

    const resetPwd = (email)=>{
        return sendPasswordResetEmail(auth,email,{
            url:"http://localhost:3000"
        });
    }
    const firebaseLogout = ()=>{
        return signOut(auth);
    }
    return(
        <FirebaseContext.Provider value={{firebaseSignup,googleSignin,firebaseLogin,firebaseLogout,resetPwd}}>{props.children}</FirebaseContext.Provider>
    )
}

export default FirebaseState;