import { createContext } from "react";

export const Authcontext = createContext(null)
const Authprovider = ({children}) => {




const authinfo = {

}
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;