import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";

export const Authcontext = createContext(null)
const Authprovider = ({children}) => {

const [user , setUser] = useState(null) 
const [Loading , setLoading] = useState(true) 


    





  onAuthStateChanged(auth , currentUser =>{
    console.log(currentUser)
  })

const authinfo = {
    user,


}
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;