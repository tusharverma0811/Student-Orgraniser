import React from 'react'
import AuthContext from './AuthContext'

const AuthState = (props)=>{

    const signup = async(name,email,password)=>{
        const response = await fetch(`/auth/createuser`,{
            method: "POST",
            headers:{
               "Content-Type":"application/json"
            },
            body: JSON.stringify({name,email,password})
        })

        const data = await response.json();
        return data;
    }

    const login = async(email,password)=>{
        const response = await fetch(`/auth/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({email,password})
        })

        const data = await response.json();
        return data;
    }

    return(
        <AuthContext.Provider value={{signup,login}}>{props.children}</AuthContext.Provider>
    );
}

export default AuthState;