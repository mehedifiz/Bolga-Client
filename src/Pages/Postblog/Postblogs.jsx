import axios from "axios";
import { useContext } from "react";
import { Authcontext } from "../../Auth/Authprovider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const Postblogs = () => {
    const {user } = useContext(Authcontext)
    
const handleBlogpost =(e)=>{
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
   const category = form.category.value;
   const image = form.image.value;
   const author = form.author.value;
   const date = form.date.value;
    const content = form.content.value;
    const email= user.email;

   const blog = {title ,category , image ,author , date , content , email}
   console.log(blog)

    axios.post('http://localhost:4000/allBloges', blog)

    .then(data =>{


      Swal.fire({
        icon: "success",
        title: "Yay!",
        text: "Your blog has been posted.",
        footer: '<a href="/my-blogs">See Your Blogs</a>',
      });

    })
    .catch(err =>{
        console.log(err)
    })

}



    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 sm:p-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-2xl p-6">
        <h1 className="text-2xl font-bold mb-4">Post a New Blog</h1>
        <form onSubmit={handleBlogpost} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Write the title here"
              className="mt-1 block w-full py-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              name="category"
              
              className="mt-1 py-3  block  border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            >
              <option value="">Select a category</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Finance">Finance</option>
              <option value="Travel">Travel</option>
              <option value="Food">Food</option>
              <option value="Education">Education</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              name="image"
             placeholder="mage URL"
              className="mt-1 py-3 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Author</label>
            <input
              type="text"
              name="author"
              placeholder="Author Name"
              className="mt-1 py-3 block w-full border-gray-900 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              
              className="mt-1 py-3 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              name="content"
              placeholder="Write the blog content"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows="6"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
             Publish
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Postblogs;