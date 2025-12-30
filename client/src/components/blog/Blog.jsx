import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const Blog = () => {
  const { blogId } = useParams();
  const [content, setContent] = useState('');
  const [attributes, setAttributes] = useState({});

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const markdownModule = await import(`../../blogs/${blogId}.md`);

        const htmlContent = markdownModule.html || '';
        setContent(htmlContent);

        setAttributes(markdownModule.attributes || {});
      } catch (err) {}
    };

    loadMarkdown();
  }, [blogId]);

  return (
    <div className="blog-content w-full bg-black">
      <div className="container mx-auto">
        <div className="py-32 flex justify-center items-center w-full">
          <div className="bg-[#141414] flex flex-col justify-center items-center shadow-lg md:px-8 rounded-2xl md:py-8 hover:shadow-red-600 p-4 w-full">
            <h1 className="text-white text-center text-3xl font-bold mb-4">
              {attributes.title}
            </h1>

            <p className="text-gray-400 mb-6">
              {attributes.description}
            </p>

            <div className="markdown-body text-gray-200 max-w-full">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
