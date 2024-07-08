import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/Blogs.json')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
            });
    }, []);

    return (
        <div className="container lg:ml-6 px-4">
            <h2>{blogs.length}</h2>

            <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.map(blog => (
                    <Blog key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default Blogs;
