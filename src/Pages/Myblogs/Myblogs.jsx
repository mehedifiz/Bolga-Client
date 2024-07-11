import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../Auth/Authprovider";
import axios from "axios";
import Myblogcard from "../../Components/Myblogcard/Myblogcard";
import noBlogaImage from '../../Components/Myblogcard/not.svg'
import { Link } from "react-router-dom";

const Myblogs = () => {
  const { user } = useContext(Authcontext);
  const [myblog, setMyblog] = useState([]);

  const url = `http://localhost:4000/blogsByEmail?email=${user?.email}`;

  useEffect(() => {
    axios.get(url).then(data => {
      setMyblog(data.data);
      
    });
  }, [url]);

  const handleDelete = _id => {
    console.log(_id);
    axios.delete(`http://localhost:4000/blogsByEmail/${_id}`)
      .then(data => {
        console.log(data.data);
      });

  }

  


  return (
    <div className="p-6  w-full mt-10  flex justify-center items-center">
      {myblog.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {myblog.map(blog => (
            <Myblogcard 
              blog={blog} 
              key={blog._id} 
              handleDelete={handleDelete} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <img className="w-80 mx-auto mb-4" src={noBlogaImage} alt="No Blogs" />
          <h2 className="text-2xl mb-4">You Have No Posted Blog.</h2>
          <Link to='/post-blog' className=" text-white px-4 py-2 rounded-xl bg-indigo-700 hover:bg-blue-700 link">
            Post a Blog
          </Link>
        </div>
      )}
    </div>
  );
};

export default Myblogs;
