import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogFiles = [
      { id: 'generate-jwt', title: 'FEWV Seconds of Learning How to Generate a JWT?', description: 'Learn how to generate a JSON Web Token (JWT) in just a few seconds.', tags: ['React', 'JavaScript'] },
      { id: 'learn-docker', title: 'FEWV Seconds of Learning How to Containerize?', description: 'Learn how to containerize your applications using Docker.', tags: ['Docker', 'Node.js'] },
      { id: 'learn-figma-react', title: 'FEWV Seconds of Learning Convert Figma to React?', description: 'Learn how to convert Figma designs to React components.', tags: ['Figma', 'React.js'] },
      { id: 'k8s-basics', title: 'Learn Kubernetes Basics in Just a Few Seconds', description: 'Get started with Kubernetes and learn the basics in just a few seconds.', tags: ['K8s', 'Node.js'] },
    ];
    setBlogs(blogFiles);
  }, []);

  return (
    <div className="blog-list container mx-auto p-4 bg-black">
      <div className="py-36">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Our Blogs
        </h1>

        <p className="mt-6 text-gray-400 text-center">
          Read our latest blogs and learn new skills in just a few seconds.
        </p>

        <ul className="space-y-8 mt-12">
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="bg-[#141414] p-8 rounded-lg shadow-lg md:px-8 md:py-8 hover:shadow-red-600"
            >
              <div className="flex justify-between items-center">
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-gray-200 hover:text-red-600 text-lg font-medium"
                >
                  {blog.title}
                </Link>

                <div className="text-gray-400 text-sm">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="ml-2 bg-gray-800 text-gray-200 p-2 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-gray-400 mt-4">
                {blog.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogList;
