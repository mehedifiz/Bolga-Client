const Blog = ({ blog }) => {
    const { title, category, image, author, content } = blog;

    return (
        <div className="card bg-base-100 w-80 rounded-sm shadow-xl">
            <figure>
                <img src={image} alt="Blog Image" />
            </figure>
            <div className="card-actions mx-2 justify-between">
                <div className="text-white mt-1 bg-gray-800 rounded text-sm font-mono">{category}</div>
                <p className="text-white mt-1 bg-gray-800 rounded text-sm font-mono">By {author}</p>
                
            </div>
            <div className="card-body justify-start ">
                <p className="card-title">{title}</p>
                <p className="text-sm text-gray-700">{content.substring(0, content.indexOf(' ', 115))}...</p>
            </div>
        </div>
    );
};

export default Blog;
