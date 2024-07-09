import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const Authcontext = createContext(null)
const Authprovider = ({children}) => {

const [user , setUser] = useState(null) 
const [loading , setLoading] = useState(true) 


const createUser = (email , password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth ,email , password )
}
const login =(email , password)=>{
  setLoading(true)

  return signInWithEmailAndPassword(auth , email , password)
}


 const logOut =()=>{
  setLoading(true);
  return signOut(auth)
 }

 const googleProvider = new GoogleAuthProvider()

 const googleLogin =()=>{
  setLoading(true)

  return signInWithPopup(auth , googleProvider)
 }
    





  onAuthStateChanged(auth , currentUser =>{
    setLoading(true)
    console.log(currentUser)
    setUser(currentUser)
  })

const authinfo = {
    user,
    createUser,
    login,
    logOut,
    googleLogin,
    loading



}
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;