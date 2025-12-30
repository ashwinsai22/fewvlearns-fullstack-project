import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "./assets/home-image.png";
import Jane from "./assets/testimonials-images/jane.png";
import Chris from "./assets/testimonials-images/chris.png";
import Leslie from "./assets/testimonials-images/Leslie.png";
import Mike from "./assets/testimonials-images/mike.png";

const testimonials = [
  {
    id: 1,
    text: "Bezawada Academy have been a great resource for me. I've learned so much from their courses. I would recommend them to anyone. 🥰",
    author: "Jane Steiner",
    title: "VP Sales at Google",
    imageUrl: Jane,
  },
  {
    id: 2,
    text: "The K8s course has been a game changer for me. This is how you explain complex topics in a simple way. Thanks for the great content, Bezawada Academy!",
    author: "Chris Ambrose",
    title: "Lead marketer at Netflix",
    imageUrl: Chris,
  },
  {
    id: 3,
    text: "This is an amazing course. Just finished the React course and I'm already seeing the benefits. Thanks for the great content.",
    author: "Leslie Winn",
    title: "Co-founder of Acme Inc",
    imageUrl: Leslie,
  },
  {
    id: 4,
    text: "An useful resource for learning web development.",
    author: "Mike Winn",
    title: "Co-founder of Acme Inc",
    imageUrl: Mike,
  },
];

const MainPage = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center bg-black">
        {/* Welcome Page */}
        <div className="flex flex-col justify-center items-center bg-style py-48 px-10">
          <div className="text-center">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-600/50 hover:ring-gray-500/70">
                Announcing our list of our free resources.{" "}
                <Link to="/blogs" className="font-semibold text-red-600">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read Blogs. <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            <h1 className="text-3xl text-gray-100 font-extrabold sm:text-6xl">
              Welcome to,
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent">
                {" "}
                Bezawada Academy{" "}
              </span>
              !
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-gray-300">
              Unlock your true potential and engineer a brighter tomorrow. 
              We bridge the gap between academic degrees and industry-ready careers 
              through practical IT training.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded-full border border-red-600 px-12 py-3 text-sm font-medium text-white hover:text-black hover:bg-red-600 focus:outline-none sm:w-auto"
                to="/blogs"
              >
                Read Blogs
              </Link>

              <Link
                className="block w-full rounded-full border border-red-600 px-12 py-3 text-sm font-medium text-white hover:text-black hover:bg-red-600 focus:outline-none sm:w-auto"
                to="/courses"
              >
                Buy Courses
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center rounded-xl shadow-lg hover:shadow-red-600 max-w-5xl mx-auto mt-24">
            <Link to="/Courses">
              <img
                src={backgroundImage}
                alt=""
                className="h-auto max-w-full rounded-xl"
              />
            </Link>
          </div>
        </div>

        {/* What is Bezawada Academy */}
        <div className="my-24 max-w-5xl mx-auto px-10">
          <div className="mx-auto py-12 text-center">
            <div className="text-sm font-bold tracking-wider text-red-600 uppercase">
              Get to know us
            </div>

            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-6xl py-4">
              What is{" "}
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent">
                Bezawada Academy
              </span>
              ?
            </p>

            <p className="mt-4 max-w-2xl text-lg text-gray-300 lg:mx-auto">
              We are a team of developers who are passionate about building modern
              web applications and sharing our knowledge with the community.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative bg-[#141414] shadow-lg hover:shadow-red-600 rounded-2xl p-4 text-xl transform transition-transform duration-300 hover:scale-105"
                >
                  {{
                    1: "Bezawada Academy is a platform for learning web development. We offer courses on various topics like React, Node.js, Kubernetes, and more.",
                    2: "Our courses are designed to help you learn new skills and advance your career. We offer both free and paid courses.",
                    3: "We have a team of experienced developers who are passionate about teaching and helping others learn.",
                    4: "Our goal is to provide you with the knowledge and skills you need to succeed in the tech industry.",
                  }[i]}
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Testimonials */}
        <div className="my-5 max-w-5xl mx-auto px-10">
          <div className="text-center">
            <div className="text-sm font-bold tracking-wider text-red-600 py-4 uppercase">
              Testimonials
            </div>
            <h2 className="py-4 text-3xl font-bold text-gray-200 lg:text-4xl">
              Here's what our Students have to say..
            </h2>
            <p className="py-4 text-lg text-gray-400">
              Here are some testimonials from our students who have taken our
              courses.
            </p>
          </div>

          <div className="mx-auto my-10 grid gap-10 grid-cols-1 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col justify-between px-6 py-6 bg-[#141414] shadow-lg hover:shadow-red-600 rounded-2xl transform transition-transform duration-300 hover:scale-105"
              >
                <p className="text-xl text-gray-300">
                  {testimonial.text}
                </p>

                <div className="flex items-center mt-8 space-x-3">
                  <div className="overflow-hidden rounded-full w-14 h-14">
                    <img
                      alt="Avatar"
                      src={testimonial.imageUrl}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-medium text-gray-200">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-400">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
