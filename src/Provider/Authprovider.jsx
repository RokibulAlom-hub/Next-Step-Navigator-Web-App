import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.init";

export const Authcontext = createContext(null);
const Authprovider = ({children}) => {
    const [user,setUser] = useState(null)
    // createUserin regiser form
    const creatUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
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
        user,

    }
    return (
        <Authcontext.Provider value={authInformation}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;