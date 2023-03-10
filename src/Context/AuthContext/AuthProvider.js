import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOutUser =() =>{
        setLoading(true);
        return signOut(auth);
    }
    const googleLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const githubLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const updateCurrentProfile = (profile)=>{
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{unsubscribe();}
    },[])

    const authInfo = {
        user, 
        googleLogin,
        logOutUser, 
        loginUser, 
        createUser, 
        loading, 
        updateCurrentProfile,
        githubLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;