import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
function Designs() {
  const uEmail = useSelector((state)=>state.authSlice.userAllDetails.email)
  const user = localStorage.getItem("user");

  const [designs, setDesigns] = useState([]);
  const [heart, setHeart] = useState([]);

  const token = localStorage.getItem("user");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
 

  useEffect(() => {
    const fetchDesigns = async () => {
      const response = await axiosContractorInstance
        .get("/contractorDesigns")

        .then((response) => {
          setLoading(false);

          let res = response.data;
          setDesigns(res);
        });
    };

    fetchDesigns();
  }, []);

  

  const handleClick = (id) => {
    navigate("/viewDesigns", { state: id });
  };

  const config = {
    headers: {
        Accept: 'application/json',
        Authorization: user,
        'Content-Type': 'application/json'
    }
};

  const saveClick = (id)=>{ 
      let   data={
       DesignId : id,
    }   
      // console.log(data);
      const response = axiosUserInstance.post("/wishlist",data,config).then((resp)=>{
        console.log(resp.data);
        if(resp.data.status == "existing"){
          toast.warn(resp.data.data)
        }else {
          toast.success(resp.data.data)
        }
      })   
  }

  return (
    <div>
        <link
       rel="stylesheet"
       href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
     ></link>
     <link
       rel="stylesheet"
       href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
     ></link>
      <div className="relative">
        <img className="w-[100%] h-[88vh] " src={cDesign} alt="" />

        <h1 className="absolute text-center text-2xl text-black bottom-4 left-1/2 -translate-x-1/2 pb-10 w-full pt-8 bg-blue-600/[.55] font-semibold italic">
          We transform your homes from vision to reality
        </h1>
      </div>
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

      {designs.map((element) => (
        <div className="flex items-center min-h mt-16 " key={element._id}>
          <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="h-32 md:h-auto md:w-1/2  ">
                {element.image1 ? <img
                  className="object-contain w-full h-full "
                  src={element.image1}
                  alt="img"
                />:<img
                className="object-contain w-full h-full "
                src={cKLH1}
                alt="img"
              /> }
                
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
                      <div className="flex ml-auto hover:cursor-pointer text-red-600" onClick={()=>{
                        saveClick(element._id)
                      }}>
                        <i className="fa fa-heart " ></i>
                      </div>
                    </div>
                    
                    
                    {element.description.map((ele, index) => (
                      <li className="pt-3" key={index}>
                        {" "}
                        {ele}
                      </li>
                    ))}
                  </ul>

                  
                    <button
                      className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6 ml-24"
                      onClick={() => {
                        handleClick(element._id);
                      }}
                    >
                      View Designs
                    </button>
                  
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
  );
}

export default Designs;
