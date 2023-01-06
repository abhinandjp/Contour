import React, { useState } from "react";
import { cGeneral, cRemodel, cNew } from "../../assets/User/Exports";

function Services() {
  const [general, setGeneral] = useState(0);
  console.log(general);
  return (
    <div>
      <div className="flex justify-center items-center pt-10 ">
        <h1 className=" text-center text-white text-lg bg-blue-700 h-12 w-48 rounded pt-2 font-semibold cursor-not-allowed ">
          Services We Provide
        </h1>
      </div>
      <div className="flex justify-center gap-2 p-4 border-double border-emerald-500 border-4 flex-wrap mt-10 ">
        <div
          className="p-4 ml-4 text-black bg-cyan-600 rounded font-semibold cursor-pointer hover:bg-cyan-900"
          onClick={() => setGeneral(0)}
        >
          General Construction
        </div>
        <div
          className="p-4 ml-4 text-black bg-lightGreen rounded font-semibold cursor-pointer hover:bg-green-800"
          onClick={() => setGeneral(1)}
        >
          New Construction
        </div>
        <div
          className="p-4 ml-4 text-black bg-emerald-500  rounded font-semibold cursor-pointer hover:bg-emerald-700"
          onClick={() => setGeneral(2)}
        >
          Home Remodeling
        </div>
      </div>

      {general == 0 ? (
        <div className="flex items-center min-h mt-16">
          <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="h-32 md:h-auto md:w-1/2 ">
                <img
                  className="object-contain w-full h-full "
                  src={cGeneral}
                  alt="img"
                />
              </div>
              <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 ">
                <div className="w-full">
                  <h1>
                    We are a general contractor we work with all aspects of the
                    building process. You don’t have to work with multiple
                    subcontractors for each area of your construction project
                    .Our experienced team will take care of all the work,
                    starting from the building plans to finishing with
                    electricity and plumbing.{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : general == 1 ? (
        <div className="flex items-center min-h mt-16">
          <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row-reverse">
              <div className="h-32 md:h-auto md:w-1/2">
                <img
                  className="object-contain w-full h-full"
                  src={cNew}
                  alt="img"
                />
              </div>
              <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 ">
                <div className="w-full">
                  <h1>
                    Explore our wide variety of cabinetry, countertops, flooring
                    and more. Our experts have nearly two decades of experience
                    and have completed over 20,000 successful projects . We are
                    proud to work with a wide variety of home improvement
                    manufacturers to provide you with the selection you need to
                    achieve your goals and match your home’s aesthetic
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center min-h mt-16">
          <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="h-32 md:h-auto md:w-1/2">
                <img
                  className="object-contain w-full h-full"
                  src={cRemodel}
                  alt="img"
                />
              </div>
              <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 ">
                <div className="w-full">
                  <h1>
                    Explore our wide variety of cabinetry, countertops, flooring
                    and more. Our experts have nearly two decades of experience
                    and have completed over 20,000 successful projects . We are
                    proud to work with a wide variety of home improvement
                    manufacturers to provide you with the selection you need to
                    achieve your goals and match your home’s aesthetic
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
