
import React, { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import auth from '../Firebase/Firebase_Init'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'


export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();
export default function AuthProvider({ children }) {
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

// Logout
const signout =()=>{
    return signOut(auth)
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
        loading,
        SIgnIn,
        creatUser,
        signout

    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
}
