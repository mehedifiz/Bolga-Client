import { useEffect, useState } from "react";
import Blogcard from "./Blogcard";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/allBloges')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
            });
    }, []);

    return (
        <div className="container   lg:ml-6 px-4">
          


            <div className="grid grid-cols-1 mx-auto mt-16 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.map(blog => (
                    <Blogcard key={blog._id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default Blogs;
