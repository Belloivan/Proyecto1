import React from "react";

function Banner () {
  return (
    <div className="container px-6 py-16 mx-auto bg-green-400">
    <div
      className="flex flex-col items-center justify-center space-y-8 lg:flex-row xl:space-x-44 lg:space-x-24 lg:space-y-0">
      <div className="flex flex-col items-start justify-start md:px-12 lg:px-0 lg:w-2/5 xl:w-3/12">
        <div>
          <p className="text-sm leading-3 text-red-500 dark:text-white">Toma las mejores fotos</p>
        </div>
        <div className="mt-2 xl:mt-4">
          <p className="text-4xl font-semibold leading-9 text-gray-800 dark:text-white">Join Our Mailing List</p>
        </div>
        <div className="mt-4 xl:mt-6">
          <p className="text-base leading-6 text-gray-600 dark:text-white">Disfrutalo a un precio increible</p>
        </div>
        <div className="w-full mt-6 xl:mt-12">
          <input
            className="w-full h-12 px-4 pb-1 text-base leading-4 text-gray-600 placeholder-gray-600 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 sm:w-96 md:w-full lg:w-72 dark:placeholder-white dark:bg-transparent dark:border-white dark:text-white"
            placeholder="Email address" type="email" name="input" id="" />
        </div>
        <div className="w-full mt-2 xl:mt-4">
          <button
            className="w-full h-12 text-base font-medium leading-4 text-white bg-gray-800 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 sm:w-96 md:w-full lg:w-72 dark:bg-white dark:text-gray-900 dark:bg-gray-150 dark:hover:bg-gray-200 dark:hover:text-gray-900">Mas
            informacion</button>
        </div>
      </div>

      <div className="">
        <img className="" src="https://i.ibb.co/CzGcZF4/pexels-katie-e-3671083-1.png" alt="girl" />
      </div>
    </div>
  </div>
  );
}

export default Banner