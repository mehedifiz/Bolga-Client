import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../Auth/Authprovider";
import axios from "axios";
import Myblogcard from "../../Components/Myblogcard/Myblogcard";

const Myblogs = () => {
  const { user } = useContext(Authcontext);
  const [myblog, setMyblog] = useState([]);

  const url = `http://localhost:4000/blogsByEmail?email=${user?.email}`;

  useEffect(() => {
    axios.get(url).then(data => {
      setMyblog(data.data);
    });
  }, [url]);

  console.log(myblog); // Debugging output

  return (<div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
     
     {myblog.map(blog => (
       <Myblogcard blog={blog} key={blog._id} />
     ))}
   </div>

  </div>
   
  );
};

export default Myblogs;
