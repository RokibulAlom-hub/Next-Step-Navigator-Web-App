import { useContext } from "react";
import { Authcontext } from "../../Provider/Authprovider";
import { Navigate } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext);
    if(loading){
        return <Spinner></Spinner>
    }
    if (user) {
        return children;
    } 
    return <Navigate to='/login'></Navigate>
        
    
};

export default PrivateRoute;
