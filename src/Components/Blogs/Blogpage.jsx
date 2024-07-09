import { useLoaderData } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useInView } from 'react-intersection-observer';

const Blogpage = () => {
  const blog = useLoaderData();
  const { title, category, image, author, date, content } = blog;
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true });

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4 sm:p-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl">
        {image && (
          <img
            ref={imageRef}
            className={`w-full h-64 object-cover transition-opacity duration-1000 ${imageInView ? 'opacity-100' : 'opacity-0'}`}
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
          <div
            ref={contentRef}
            className={`prose prose-sm sm:prose lg:prose-lg xl:prose-xl text-gray-700 transition-opacity duration-1000 ${contentInView ? 'opacity-100' : 'opacity-0'}`}
          >
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
