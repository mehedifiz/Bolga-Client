import { useLoaderData } from 'react-router-dom';

const Blogpage = () => {
  const blog = useLoaderData();
  const { title, category, image, author, date, content } = blog;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4 sm:p-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl">
        {image && (
          <img
            className="w-full h-64 object-cover"
            src={image}
            alt={title}
          />
        )}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span className="mr-1">Category:</span>
            <span className="text-blue-600 font-medium">{category}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="mr-1">By:</span>
            <span className="text-green-600 font-medium">{author}</span>
            <span className="mx-2">|</span>
            <span>{date}</span>
          </div>
          <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl text-gray-700" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
