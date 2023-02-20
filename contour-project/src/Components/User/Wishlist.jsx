import React, { useEffect, useState } from 'react'
import { axiosContractorInstance, axiosUserInstance } from "../../Instance/Axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userToken } from "../../Redux/authSlice";
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


function Wishlist() {
  const uEmail = useSelector((state)=>state.authSlice.userAllDetails.email)
  const user = localStorage.getItem("user");

  const [designs, setDesigns] = useState([]);
  const token = localStorage.getItem("user");
  const [loading, setLoading] = useState(true);
  const [deleted , setDeleted] = useState('')
  const navigate = useNavigate();
 
  const config = {
    headers: {
        Accept: 'application/json',
        Authorization: user,
        'Content-Type': 'application/json'
    }
};

  useEffect(() => {
    const fetchDesigns = async () => {
      const response = await axiosUserInstance
        .post("/getWishlist",{data : ""},config)

        .then((response) => {
          setLoading(false);
          // console.log(response);
          let res = response.data;
          setDesigns(res);
          setDeleted('')
        });
    };
    fetchDesigns();
  }, [deleted]);

  // console.log(designs.items);
  let mapping = designs.items || []
  // console.log(mapping , "maping");

  const handleClick = (id) => {
    navigate("/viewDesigns", { state: id });
  };

  // console.log(designs)

  const deleteClick = async (id)=>{  
    // console.log(id);  
    // console.log()
    const response = await axiosUserInstance.post("/deleteDesign" , {id : id } , config)
    .then((response)=>{
      // console.log(response);
      setDeleted('done')
      toast.success("Removed From Wishlist")
      
    })
  }

 
  return (
    <div>
      {loading && (
        <div className="flex justify-center items-center pt-5">
          <div
            className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-red-500"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {mapping.map((element) => (
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
                    <div className="flex ">
                      <div>
                        <li className="list-none ml-24 mb-5 text-red-500 text-xl">
                      {element.designName}
                    </li>
                      </div  >
                     
                    </div>
                    
                    

                       <div className='flex '>
                        <div className='text-emerald-400'>
                        Contractor :
                        </div>
                        <div>
                        <li className=" list-none ml-2 ">
                       {element.email}
                      </li>
                        </div>
                       </div>
                    
                    {element.description.map((ele, index) => ( 
                    <li className="pt-3" key={index}> 
                       
                        {ele} 
                       </li> 
                     ))}
                  </ul>

                  <div className='flex justify-center'>
                    <button
                      className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6 ml-24"
                      onClick={() => {
                        handleClick(element._id);
                      }}
                    >
                      View Designs
                    </button>
                    <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded mt-6 ml-5"
                  onClick={()=>deleteClick(element._id)}>
                    Remove
                  </button>
                  </div>
                  
                    {/* <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6 ml-24">
                      <Link to="/login">View Designs</Link>
                    </button> */}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
       ))} 
    </div>
  )
}

export default Wishlist