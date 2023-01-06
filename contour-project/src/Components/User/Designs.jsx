import React , { useEffect, useState } from "react";
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
  const token = localStorage.getItem('token')
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
  return (
    <div>
      <div className="relative">
        <img className="w-[100%] h-[88vh] " src={cDesign} alt="" />

        <h1 className="absolute text-center text-2xl text-black bottom-4 left-1/2 -translate-x-1/2 pb-10 w-full pt-8 bg-blue-600/[.55] font-semibold italic">
          We transform your homes from vision to reality
        </h1>
      </div>
      {designs.map((element) => (
      <div className="flex items-center min-h mt-16 " key={element._id}>
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
                  <li className="list-none ml-24 mb-5 text-red-500 text-xl">{element.designName}</li>
                  {element.description.map((ele) => (
                      <li className="pt-3"  > {ele}</li>
                    ))}
                  
                </ul>
                  
                <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6 ml-24">
                {token ?
                <Link to="/viewDesigns">View Designs</Link>:
                <Link to="/login">View Designs</Link> }
                </button> 
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
     
    </div>
  );
}

export default Designs;
