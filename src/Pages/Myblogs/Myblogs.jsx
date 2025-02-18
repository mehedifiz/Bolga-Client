import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../Auth/Authprovider";
import axios from "axios";
import Myblogcard from "../../Components/Myblogcard/Myblogcard";
import noBlogaImage from '../../Components/Myblogcard/not.svg'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Result } from "postcss";

const Myblogs = () => {
  const { user } = useContext(Authcontext);
  const [myblog, setMyblog] = useState([]);

  const url = `http://localhost:4000/blogsByEmail?email=${user?.email}`;

  useEffect(() => {
    axios.get(url ,{ withCredentials:true})
    .then(data => {
      setMyblog(data.data);
      
    });
  }, [url]);

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yep, delete it!'
    })
    .then(Result =>{

      if(Result.isConfirmed){
        axios.delete(`http://localhost:4000/blogsByEmail/${_id}`)
  .then(data => {

    const remaing = myblog.filter(blg => blg._id !== _id)
    setMyblog(remaing)
  });
      }
      
    })


    

  }


  // axios.delete(`http://localhost:4000/blogsByEmail/${_id}`)
  // .then(data => {

  //   const remaing = myblog.filter(blg => blg._id !== _id)
  //   setMyblog(remaing)
  // });

  return (
    <div className="p-6  w-full mt-10  flex justify-center items-center">
      {myblog.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {myblog.map(blog => (
            <Myblogcard 
              blog={blog} 
              key={blog._id} 
              handleDelete={handleDelete}
              setMyblog={setMyblog} 
              myblog={myblog}
            />
          ))}
        </div>
      ) : (
        <div className="text-center mt-32">
          <img className="w-72 mx-auto mb-4" src={noBlogaImage} alt="No Blogs" />
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
