import React from "react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <>
                            {/* home */} 
      <div className="flex  items-center justify-center mb-40">
        <div className="lg:w-5/12 lg:mr-20 w-3/8 mr-2">
          <h1 className="lg:text-6xl text-lg pb-4">Learn Any Skills to advance your career path</h1>
          <p className="lg:text-xl text-gray-500 text-[8px]">Want to improve your work skills? You need to study harder with the help of a great mentor to improve your performance at work</p>
        </div>
        <div className="lg:w-5/12 w-6/8 lg:ml-28 ">
       <img className="lg:h-100 w-90 "src="/Learning.svg" alt="" />
        </div>
       
      </div>
      <div></div>
    </>
  );
}
