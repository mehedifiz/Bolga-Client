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
  }, [myblog]);

  const handleDelete =_id=>{
    console.log(_id)
    axios.delete(`http://localhost:4000/blogsByEmail/${_id}`)
    .then(data =>{
        console.log(data.data)
    })
  }



  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Blogs ({myblog.length})</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {myblog.map(blog => (
          <Myblogcard blog={blog} 
          key={blog._id}
          handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Myblogs;
