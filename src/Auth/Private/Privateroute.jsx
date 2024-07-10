import { useContext } from "react";
import { Authcontext } from "../Authprovider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";


const Privateroute = ({children}) => {
const {user , loading} = useContext(Authcontext)
const location = useLocation()
console.log(location)

if(loading){
    return <div>
        <span className="loading loading-infinity loading-lg"></span>


    </div>
}
if(user){
    return  children ;
}




return <Navigate state={location.pathname} to='/login' replace></Navigate>
  
};

export default Privateroute;