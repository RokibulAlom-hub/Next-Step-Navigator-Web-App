import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.init";

export const Authcontext = createContext(null);
const Authprovider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    // createUserin regiser form
    const creatUser =(name,photoURL,email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password,name,photoURL)
    }
    // google login
    const googlelogin = () =>{
        return signInWithPopup(auth,googleProvider)
    } 
    // Update user name and photo
    const updateUserData = (updateData) =>{
        return updateProfile(auth.currentUser,updateData)
    }
    // Userlogin form
    const userLogin =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // observer for users
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth,(currentuser) =>{
        setUser(currentuser);
        console.log(currentuser);
        setLoading(false)
        })
        return () =>{
            unsubscribe()
        }
    },[])
    // logout form
    const userLogout =() =>{
        return signOut(auth)
    }
    const authInformation = {
        creatUser,
        userLogin,
        userLogout,
        updateUserData,
        googlelogin,
        loading,
        user,

    }
    return (
        <Authcontext.Provider value={authInformation}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;