import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../Auth/Authprovider";

const Myblogs = () => {

    const {user , loading} = useContext(Authcontext)
    const [myblog , setMyblog] = useState([])


    const url = ` http://localhost:4000/blogsByEmail?email=${user.email}`

        useEffect(()=>{
            fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyblog(data)
            })
        } ,[])

    return (
        <div>
            <p>{myblog.length}</p>
            
        </div>
    );
};

export default Myblogs;