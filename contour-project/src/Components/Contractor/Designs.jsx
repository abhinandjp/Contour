import React, { useEffect, useState } from "react";
import { Link, useAsyncError } from "react-router-dom";
import { axiosContractorInstance } from "../../Instance/Axios";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'


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
  const [designs, setDesigns] = useState([])
  const [loading, setLoading] = useState(true)
  const [deleted , setDeleted] = useState(false)
  const user = localStorage.getItem("user");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDesigns = async () => {
      const response = await axiosContractorInstance
        .get("/contractorDesigns")
        .then((response) => {
          setLoading(false);
          let res = response.data;
          setDesigns(res);
          setDeleted(false)
        });     
    };
    fetchDesigns();
  }, [deleted]);

  const config = {
    headers: {
        Accept: 'application/json',
        Authorization: user,
        'Content-Type': 'application/json'
    }
};

  const editClick = async (element)=>{    
    navigate("/editDesigns", { state: element });
  }

  const deleteClick = async (id)=>{    
    const response = await axiosContractorInstance.post("/deleteDesign" , {id : id},config)
    .then((response)=>{
      toast.success("Design Deleted Succesfully")
      setDeleted(response.data.deleteDesgn)
    })
  }
  // console.log(deleted);
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

      {loading ? (
        <div className="flex justify-center items-center pt-5">
          <div
            className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-red-500"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>)
      
       :
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
}
      {designs.map((element) => (
        <div key={element._id} className="flex items-center min-h mt-16 ">
          <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="h-32 md:h-auto md:w-1/2  ">
                 {element.image1 ?<img
                  className="object-contain w-full h-full "
                  src={element.image1}
                  alt="img"
                /> :<img
                  className="object-contain w-full h-full "
                  src={cKLH1}
                  alt="img"
                />}
                
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
                      <div className="flex justify-center">
                  <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-6 "
                   onClick={()=>editClick(element)}>
                    Edit
                  </button>
                  <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded mt-6 ml-5"
                  onClick={()=>deleteClick(element._id)}>
                    Delete
                  </button>

{/* <button data-modal-target="staticModal" data-modal-toggle="staticModal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button>

<div id="staticModal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div className="relative w-full h-full max-w-2xl md:h-auto">
     
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Static modal
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            
            <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
        
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="staticModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="staticModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>
        </div>
    </div>
</div> */}

                  </div>
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
