import React from "react";

import { cBuliding, cCrane } from "../../assets/User/Exports";

function Home() {
  return (
    <div>
      <div>
        <div className="relative">
          <img className="w-[100%] h-[88vh]" src={cBuliding} alt="" />

          <h1 className="absolute text-center text-2xl text-slate-50 bottom-4 left-1/2 -translate-x-1/2 pb-10 w-full pt-8 bg-blue-600/[0.8] font-semibold">
            Live Your Dreams , Build Your Home
          </h1>
        </div>
        <div className="flex justify-center items-center pt-10 ">
          <h1 className=" text-center text-lg text-white bg-blue-700 h-12 w-48 rounded pt-2 font-semibold ">
            Why Choose Us ?
          </h1>
        </div>
        <div className="flex items-center min-h mt-16">
          <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="h-32 md:h-auto md:w-1/2">
                <img
                  className="object-contain w-full h-full"
                  src={cCrane}
                  alt="img"
                />
              </div>
              <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 ">
                <div className="w-full">
                  <ul className="list-disc  text-base font-semibold ml-5 ">
                    <li>Easy to understand contracts</li>
                    <li className="pt-3"> A no-sale pressure Enviroment</li>
                    <li className="pt-3">
                      {" "}
                      Knowledgeable project managers who help along the way
                    </li>
                    <li className="pt-3">
                      Modern design trends using high-quality materials
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
