import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosContractorInstance } from "../../Instance/Axios";

import {
  cDesign,
  cCrane,
  cKLH1,
  cKLH2,
  cKLH3,
  cKLH4,
  cKLH5,
} from "../../assets/User/Exports";
function Designs() {
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    const fetchDesigns = async () => {
      const response = await axiosContractorInstance
        .get("/contractorDesigns")
        .then((response) => {
          let res = response.data;
          setDesigns(res);
        });     
    };
    fetchDesigns();
  }, []);

  console.log(designs);
  // console.log(designs[0]);

  return (
    <div>
      <div className="relative">
        <img className="w-[100%] h-[88vh] " src={cDesign} alt="" />

        <h1 className="absolute text-center text-2xl text-black bottom-4 left-1/2 -translate-x-1/2 pb-10 w-full pt-8 bg-blue-600/[.55] font-semibold italic">
          Good Design for Good Home
        </h1>
      </div>
      <div className="flex space-x-2 justify-center">
        <div>
          <button
            type="button"
            className="mt-16 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs  uppercase rounded  hover:bg-teal-400    transition duration-500 ease-in-out"
          >
            <Link to="/addDesigns">Add Details</Link>
          </button>
        </div>
      </div>
      {designs.map((element) => (
        <div key={element._id} className="flex items-center min-h mt-16 ">
          <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="h-32 md:h-auto md:w-1/2  ">
                <img
                  className="object-contain w-full h-full "
                  src={cKLH1}
                  alt="img"
                />
              </div>

              <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 ">
                <div className="w-full">
                  <ul className="list-disc  text-base font-semibold ml-5 ">
                    <li className="list-none ml-24 mb-5 text-red-500 text-xl">
                      {element.designName}
                    </li>

                    {element.description.map((ele) => (
                      <li className="pt-3"> {ele}</li>
                    ))}

                    <li className="pt-3 list-none">
                      Estimated Price : Rs. {element.cost}
                    </li>
                  </ul>

                  <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6 ml-24">
                    <Link to="/viewDesigns">Edit Details</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <div className="flex items-center min-h mt-16">
        <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                className="object-contain w-full h-full"
                src={cKLH2}
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
                <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6 ml-24">
                <Link to="/viewDesigns">Edit Details</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="flex items-center min-h mt-16">
        <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                className="object-contain w-full h-full"
                src={cKLH3}
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
                <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6 ml-24">
                <Link to="/viewDesigns">Edit Details</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="flex items-center min-h mt-16">
        <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                className="object-contain w-full h-full"
                src={cKLH4}
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
                <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6 ml-24">
                <Link to="/viewDesigns">Edit Details</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Designs;
