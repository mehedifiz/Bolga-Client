import { useContext } from "react";
import { Authcontext } from "../Authprovider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";


const Privateroute = ({children}) => {
const {user} = useContext(Authcontext)
const location = useLocation()
console.log(location)


if(user){
    return  children ;
}




return <Navigate to='/login' replace></Navigate>
  
};

export default Privateroute;