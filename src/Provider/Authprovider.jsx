import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext } from "react";
import auth from "../Firebase/Firebase.init";

export const Authcontext = createContext(null);
const Authprovider = ({children}) => {

    // createUserin regiser form
    const creatUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // Userlogin form
    const userLogin =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // logout form
    const userLogout =() =>{
        return signOut(auth)
    }
    const authInformation = {
        creatUser,
        userLogin,
        userLogout,
        
    }
    return (
        <Authcontext.Provider value={authInformation}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;