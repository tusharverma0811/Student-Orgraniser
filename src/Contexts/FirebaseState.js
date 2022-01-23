import React from 'react';
import FirebaseContext from './FirebaseContext';
import { auth } from '../Firebase/firebase';
import { signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut   } from "firebase/auth";

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

    const firebaseLogout = ()=>{
        return signOut(auth);
    }
    return(
        <FirebaseContext.Provider value={{firebaseSignup,googleSignin,firebaseLogin,firebaseLogout}}>{props.children}</FirebaseContext.Provider>
    )
}

export default FirebaseState;