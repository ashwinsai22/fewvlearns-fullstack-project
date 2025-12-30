import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mx-auto py-14 flex justify-center items-center bg-black">
      <div className="mx-auto">
        <ul className="text-lg flex items-center justify-center flex-col gap-8 md:flex-row md:gap-24 transition-all duration-500 py-16 mb-10 border-b border-gray-700">
          <Link to="/" className="text-md leading-6 text-gray-200 hover:text-red-600">
            Home
          </Link>
          <Link to="/Courses" className="text-md leading-6 text-gray-200 hover:text-red-600">
            Courses
          </Link>
          <Link to="/blogs" className="text-md leading-6 text-gray-200 hover:text-red-600">
            Blogs
          </Link>
          <Link to="/team" className="text-md leading-6 text-gray-200 hover:text-red-600">
            Team
          </Link>
          <Link to="/blogs" className="text-md leading-6 text-gray-200 hover:text-red-600">
            Privacy
          </Link>
          <Link to="/blogs" className="text-md leading-6 text-gray-200 hover:text-red-600">
            Terms & Conditions
          </Link>
        </ul>

        <div className="flex space-x-10 justify-center items-center mb-14">
          <Link to="/" className="block text-gray-200 transition-all duration-500 hover:text-red-600">
            <svg className="w-[1.688rem] h-[1.688rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
              <path d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="currentColor" />
            </svg>
          </Link>

          <Link to="/" className="block text-gray-200 transition-all duration-500 hover:text-red-600">
            <svg className="w-[1.688rem] h-[1.688rem]" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.76556 14.8811C9.76556 12.3243 11.8389 10.2511 14.3972 10.2511C16.9555 10.2511 19.03 12.3243 19.03 14.8811C19.03 17.4379 16.9555 19.5111 14.3972 19.5111C11.8389 19.5111 9.76556 17.4379 9.76556 14.8811Z" fill="currentColor"/>
            </svg>
          </Link>

          <Link to="/" className="block text-gray-200 transition-all duration-500 hover:text-red-600">
            <svg className="w-[0.938rem] h-[1.625rem]" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.7926 14.4697L14.5174 9.86889H10.0528V6.87836C10.0528 5.62033 10.6761 4.39105 12.6692 4.39105H14.7275V0.473179C13.5289 0.282204 12.3177 0.178886 11.1037 0.164062C7.42917 0.164062 5.0302 2.37101 5.0302 6.36077V9.86889H0.957031V14.4697H5.0302V25.5979H10.0528V14.4697H13.7926Z" fill="currentColor"/>
            </svg>
          </Link>

          <Link to="/" className="block text-gray-200 transition-all duration-500 hover:text-red-600">
            <svg className="w-[1.875rem] h-[1.375rem]" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M26.3106 1.27838C27.5782 1.62071 28.5745 2.61957 28.9113 3.88573C29.524 6.18356 29.524 10.9809 29.524 10.9809C29.524 10.9809 29.524 15.7782 28.9113 18.076C28.5698 19.3469 27.5735 20.3457 26.3106 20.6834C24.0186 21.2977 14.8226 21.2977 14.8226 21.2977C14.8226 21.2977 5.63122 21.2977 3.33456 20.6834C2.06695 20.3411 1.07063 19.3422 0.73385 18.076C0.121094 15.7782 0.121094 10.9809 0.121094 10.9809C0.121094 10.9809 0.121094 6.18356 0.73385 3.88573C1.07531 2.61488 2.07162 1.61602 3.33456 1.27838C5.63122 0.664062 14.8226 0.664062 14.8226 0.664062C14.8226 0.664062 24.0186 0.664062 26.3106 1.27838ZM19.5234 10.9809L11.885 15.403V6.55872L19.5234 10.9809Z" fill="currentColor"/>
            </svg>
          </Link>
        </div>

        <span className="text-lg text-red-600 text-center block">
          ©<Link to="/" className="hover:text-red-500">FewvLearns</Link> 2024. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
