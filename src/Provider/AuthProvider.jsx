
import React, { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import auth from '../Firebase/Firebase_Init'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

const provider = new GoogleAuthProvider();
export const AuthContext = createContext(null)
export default function AuthProvider({children}) {
   
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Create user

    const creatUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }



    // UserLogin
    const SIgnIn = (email,password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }

    // Update Profile
    const UpdateProfile =(name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name, photoURl:photo
        })
    }

// Logout
const signout =()=>{
    return signOut(auth)
}

// google login 
const GoogleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }


useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log('Current User ==>', currentUser);
        setLoading(false);
    });

    // Cleanup function
    return () => {
        unSubscribe();
    };
}, []);


    const userInfo = {
        user,
        setUser,
        loading,
        SIgnIn,
        creatUser,
        signout,
        UpdateProfile ,
        GoogleLogin

    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
}
