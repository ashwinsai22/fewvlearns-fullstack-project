import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
 
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const sessionId = query.get('session_id');
    const courseIds = JSON.parse(query.get('course_id') || '[]');

    if (sessionId && courseIds.length > 0) {
      const storePurchase = async () => {
        try {
          const response = await axios.post(
            'https://academy-api.bezawada.link/store-purchase/store-purchase',
            { courseIds: courseIds },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              }
            }
          );
        } catch (error) {}
      };

      storePurchase();
    }
  }, [location]);

  const handleGoToCourses = () => {
    navigate('/my-courses');
  };

  return (
    <div className="flex flex-col items-center justify-center py-36 bg-[#0B0B0B] px-4">
      <h1 className="text-3xl my-4 bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent">
        Purchase Successful!
      </h1>

      <p className="mb-4 text-gray-300">
        You got one step closer to your goalllll..😻👏🏻
      </p>

      <div className="w-full">
        <iframe
          src="https://giphy.com/embed/t3sZxY5zS5B0z5zMIz"
          width="100%"
          height="100%"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>

      <button
        onClick={handleGoToCourses}
        className="mt-6 px-4 py-2 block w-full rounded-full border border-red-600 text-sm font-medium text-white hover:text-black hover:bg-red-600 focus:outline-none focus:ring sm:w-auto"
      >
        Go to your courses
      </button>
    </div>
  );
};

export default Success;
