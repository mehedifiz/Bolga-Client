import { MdOutlineReadMore } from "react-icons/md";
import { Link } from "react-router-dom";

const Blogcard = ({ blog }) => {
  const { title, category, image, author, content, _id } = blog;

  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt="Blog" className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="bg-gray-800 text-white rounded-full text-xs px-3 py-1">
            {category}
          </span>
          <span className="text-gray-600 text-sm">By {author}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-700 mt-2">
          {content.length > 115 ? `${content.substring(0, 115)}...` : content}
        </p>
        <div className="flex justify-center mt-4">
          <Link to={`/blog/${_id}`} className="text-blue-500 hover:text-blue-700">
            <MdOutlineReadMore className="text-5xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
