import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Import images
import course1 from "../../assets/courses-images/1.png";
import course2 from "../../assets/courses-images/2.png";
import course3 from "../../assets/courses-images/3.png";
import course4 from "../../assets/courses-images/4.png";
import course5 from "../../assets/courses-images/5.png";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function refreshToken() {
    try {
      const response = await axios.post(
        "https://academy-api.bezawada.link/auth/refresh-token",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const newToken = response.data.token;
      localStorage.setItem("token", newToken);
      return newToken;
    } catch (error) {
      throw error;
    }
  }

  async function fetchPurchasedCourses() {
    try {
      let token = localStorage.getItem("token");
      const response = await axios.get(
        "https://academy-api.bezawada.link/purchased/purchased-courses",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const uniqueCourses = removeDuplicates(response.data);
      setCourses(uniqueCourses);
    } catch (error) {
      if (error.response && error.response.status === 403) {
        try {
          const token = await refreshToken();
          const response = await axios.get(
            "https://academy-api.bezawada.link/purchased/purchased-courses",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const uniqueCourses = removeDuplicates(response.data);
          setCourses(uniqueCourses);
        } catch (refreshError) {
          setError("Error refreshing token and fetching courses");
        }
      } else {
        setError("Error fetching purchased courses");
      }
    }
  }

  function removeDuplicates(courses) {
    const uniqueCourses = [];
    const courseIds = new Set();

    for (const course of courses) {
      if (!courseIds.has(course.id)) {
        uniqueCourses.push(course);
        courseIds.add(course.id);
      }
    }

    return uniqueCourses;
  }

  useEffect(() => {
    fetchPurchasedCourses();
  }, []);

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  const imageMap = {
    "Learn About Kafka and Node.js": course1,
    "React, but with webpack": course2,
    "Learn About Terraform in Depth": course3,
    "Kubernetes and Docker for deployment": course4,
    "Create your own Serverless web app": course5,
  };

  const handleCourseClick = (courseId) => {
    navigate(`/course-player/${courseId}`);
  };

  return (
    <section className="py-4 flex flex-col justify-center items-center max-w-5xl mx-auto bg-black">
      <div className="mt-36">
        <h1 className="text-3xl font-bold text-center text-white mb-4">
          Your Purchased Courses 🎉
        </h1>

        <p className="mb-12 text-center text-gray-400">
          Gear up your development skills to next level with these mindblowing courses
        </p>

        {courses.length === 0 ? (
          <p className="text-center text-gray-400">No courses found.</p>
        ) : (
          <div className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-[#141414] overflow-hidden text-gray-200 shadow-lg hover:shadow-red-600 rounded-sm transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={imageMap[course.name]}
                  alt={course.name}
                  className="w-full h-auto object-cover"
                />

                <div className="p-4">
                  <h2
                    className="text-xl font-semibold cursor-pointer hover:text-red-600"
                    onClick={() => handleCourseClick(course.id)}
                  >
                    {course.name}
                  </h2>

                  <p className="text-gray-400">{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyCourses;
