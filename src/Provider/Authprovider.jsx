import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../Firebase/Firebase.init";

export const Authcontext = createContext(null);
const Authprovider = ({children}) => {

    // createUserin regiser form
    const creatUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInformation = {
        creatUser,
    }
    return (
        <Authcontext.Provider value={authInformation}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;