import React, { useEffect, useState } from 'react'
import { axiosUserInstance } from "../../Instance/Axios";

import { useLocation ,useNavigate } from 'react-router-dom';
import {
  
  cKLH1
 
} from "../../assets/User/Exports";

function SpecificContractor() {

  const [designs, setDesigns] = useState([])
  const token = localStorage.getItem("user");


  let location = useLocation();
  const navigate = useNavigate();


// console.log(location.state);


useEffect(() => {
  let profileId = location.state
  const fetchProfile = async () => {   
    
    const response = await axiosUserInstance
      .post("/getSpecificContractorD",{user : profileId})
      
      .then((response) => {
        // console.log(response.data);
        setDesigns(response.data)
       
      }).catch((err)=>{
        console.log(err);
      })
  };
  fetchProfile();
}, []);

const handleClick = (id) => {
  navigate("/viewDesigns", { state: id });
};
// console.log("desiu",designs);
  return (
    <div>
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
                    <li className="list-none ml-24 mb-5 text-red-500 text-xl">
                      {element.designName}
                    </li>
                    {element.description.map((ele, index) => (
                      <li className="pt-3" key={index}>
                        {" "}
                        {ele}
                      </li>
                    ))}
                  </ul>

                  {token ? (
                    <button
                      className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6 ml-24"
                      onClick={() => {
                        handleClick(element._id);
                      }}
                    >
                      View Designs
                    </button>
                  ) : (
                    <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6 ml-24">
                      <Link to="/login">View Designs</Link>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SpecificContractor