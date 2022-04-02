import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="container w-screen max-w-full py-0 m-0 bg-gradient-to-r from-black to-blue-700">
    <div
      className="flex flex-col items-center justify-center space-y-8 lg:flex-row xl:space-x-44 lg:space-x-24 lg:space-y-0">
      <div className="flex flex-col items-start justify-start md:px-12 lg:px-0 lg:w-2/5 xl:w-3/12">
        <div className="mt-2 xl:mt-4">
          <p className="text-4xl font-semibold leading-9 text-gray-100 dark:text-white">Toma las mejores fotos</p>
        </div>
        <div className="mt-4 xl:mt-6">
          <p className="text-base leading-6 text-gray-200 dark:text-white">Disfrutalo a un precio increible</p>
        </div>
        <div className="w-full mt-2 xl:mt-4">
          <button
            className="w-full h-12 text-base font-medium leading-4 text-white bg-gray-800 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 sm:w-96 md:w-full lg:w-72 dark:bg-white dark:text-gray-900 dark:bg-gray-150 dark:hover:bg-gray-200 dark:hover:text-gray-900 ">Mas
            informacion</button>
        </div>
      </div>
      <div className="">
        <img className="" src="https://www.resizepixel.com/Image/qm316l8beo/Preview/2255.jpg?v=973f48d1-7c91-48b7-90cc-ae75dec405ff" alt="girl" />
      </div>
    </div>
  </div> 
  );
}


