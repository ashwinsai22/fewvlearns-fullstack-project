import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CoursePlayer = () => {
  const { courseId } = useParams();
  const [videoId, setVideoId] = useState(null);
  const [courseDetails, setCourseDetails] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(
          `https://fewvlearns-kimy.onrender.com/course-content/${courseId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          }
        );
        setVideoId(response.data.vimeoVideoId);
        setCourseDetails(response.data);
      } catch (error) {
        setError('Error fetching course details');
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <div className="p-8 md:p-4 flex flex-col items-center justify-center bg-black">
      <div className="pt-24">
        {videoId ? (
          <iframe
            src={`https://player.vimeo.com/video/${videoId}`}
            width="850"
            height="450"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Vimeo Video"
            className="my-4"
          ></iframe>
        ) : (
          <p className="text-gray-400">Loading video...</p>
        )}

        {courseDetails.name && (
          <div className="w-full max-w-4xl bg-[#141414] p-8 mt-8 shadow-lg md:px-8 rounded-2xl md:py-8 hover:shadow-red-600">
            <h1 className="text-3xl font-bold text-center text-white mb-6">
              {courseDetails.name}
            </h1>

            {courseDetails.description && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-600 mb-2">
                  Description:
                </h3>
                <p className="text-gray-400">{courseDetails.description}</p>
              </div>
            )}

            {courseDetails.syllabus && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-600 mb-2">
                  Syllabus:
                </h3>
                <ul className="list-disc list-inside text-gray-400">
                  {courseDetails.syllabus.split('\n').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {courseDetails.instructor_bio && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-600 mb-2">
                  Instructor Bio:
                </h3>
                <p className="text-gray-400">{courseDetails.instructor_bio}</p>
              </div>
            )}

            {courseDetails.testimonials && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-600 mb-2">
                  Testimonials:
                </h3>
                <ul className="list-disc list-inside text-gray-400">
                  {courseDetails.testimonials.split('\n').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePlayer;
