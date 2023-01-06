import React , { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"
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

function ViewDesign() {
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
      <Carousel  className=' '>
        
                <div className=" h-32 md:h-auto md:w-1/2 lg:w-3/4 ">
                    <img  className='object-contain w-full h-full' src={cKLH2} />
                    
                </div>
                <div className="h-32 md:h-auto md:w-1/2  lg:w-3/4 " >
                    <img className='object-contain w-full h-full' src={cKLH3} />
                </div>
                <div className="flex h-32 md:h-auto md:w-1/2  lg:w-3/4 ">
                    <img  className='object-contain w-full h-full' src={cKLH2} />
                    
                </div>
                {/* <div className="h-32 md:h-auto md:w-1/2  ">
                    <img className='object-contain w-full h-full' src={cKLH4} />
                </div> */}
            </Carousel>

            
      <div className="flex items-center min-h mt-16 ">
        <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
          <div className="flex flex-col md:flex-row">
           
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 ">
              <div className="w-full">
                <ul className="list-disc  text-base font-semibold ml-5 ">
                  <li className="list-none ml-24 mb-5 text-red-500 text-xl">haii</li>
                  
                </ul>
                  
                <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6 ml-24">
                {/* {token ?
                <Link to="/viewDesigns">View Designs</Link>:
                <Link to="/login">View Designs</Link> } */}
                <Link to="/viewDesigns">contact contactor</Link>:
                </button> 
              </div>
            </div>
          </div>
        </div>
      </div>

            
   </div>
  )
}

export default ViewDesign