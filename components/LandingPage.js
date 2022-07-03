import React from "react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <>
      {/* home */}
      <div className="flex items-center justify-center lg:pt-20 pb-40">
        <div className="lg:w-5/12 lg:mr-20 w-3/8 mr-2">
          <h1 className="lg:text-6xl text-lg pb-4">Learn Any Skills to advance your career path</h1>
          <p className="lg:text-xl text-gray-500 text-[8px]">Want to improve your work skills? You need to study harder with the help of a great mentor to improve your performance at work</p>
          <div className="w-2/5 mt-10">
            <button
              type="submit"
              className=" group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              Explore
            </button>
          </div>
        </div>
        <div className="lg:w-5/12 w-6/8 lg:ml-28 ">
          <img className="lg:h-100 w-90 " src="/Learning.svg" alt="" />
        </div>
      </div>

      <div className="grid justify-items-center pt-16 lg:pb-20">
        <h1 className="text-semibold text-xl ">Media Partner :</h1>
        <Image width={"20px"} height={"20px"} className="h-40" src="/Asset 3.svg" alt="" />
      </div>
    </>
  );
}
