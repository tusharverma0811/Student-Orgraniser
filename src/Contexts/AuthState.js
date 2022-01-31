import React from 'react'
import AuthContext from './AuthContext'

const AuthState = (props)=>{

    const signup = async(name,email)=>{
        const response = await fetch(`/auth/createuser`,{
            method: "POST",
            headers:{
               "Content-Type":"application/json"
            },
            body: JSON.stringify({name,email})
        })

        const data = await response.json();
        return data;
    }

    const login = async(email)=>{
        const response = await fetch(`/auth/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({email})
        })

        const data = await response.json();
        return data;
    }

    const googleLogin = async(name,email)=>{
        const response = await fetch(`/auth/firebaseuser`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name,email})
        })

        const data = await response.json();

        return data;
    }
    return(
        <AuthContext.Provider value={{signup,login,googleLogin}}>{props.children}</AuthContext.Provider>
    );
}

export default AuthState;