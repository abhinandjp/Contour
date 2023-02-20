import React, { useEffect, useState } from 'react'
import { useSelector} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { axiosUserInstance } from "../../Instance/Axios";



function Profile() {
  const user = localStorage.getItem("user");

  const [details , setDetails] = useState('')
  const navigate = useNavigate();

  const userDetails = useSelector(
    (state) => state.authSlice.userAllDetails
  );
  const config = {
    headers: {
        Accept: 'application/json',
        Authorization: user,
        'Content-Type': 'application/json'
    }
};
  // console.log(userDetails);
  useEffect(()=>{
    const fetchUser = async()=>{
      let userEmail = userDetails.email
    let response =  await axiosUserInstance.post("/getuser",{data : ''},config).then((response)=>{
    setDetails(response.data)

    })

    }
    fetchUser()
  },[])
  // console.log(details);
  const addClick =()=>{
  
    navigate("/profileEdit",{state : details})
   }

   const toWishlist = ()=>{
    navigate('/wishlist')

   }
  return (
    <div>
        <div>
     
     <link
       rel="stylesheet"
       href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
     ></link>
     <link
       rel="stylesheet"
       href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
     ></link>
     <section className="pt-16 bg-blueGray-50">
       <div className="w-full lg:w-4/12 px-4 mx-auto">
         <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
           <div className="px-6">
             <div className="flex flex-wrap justify-center">
               <div className="w-full px-4 flex justify-center">
                 <div className="relative">
                   <img
                     alt="..."
                     src={details.image}
                     className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                   ></img>
                   
                 </div>
               </div>
               <div className="w-full px-4 text-center mt-20">
                 <div className="flex justify-center py-4 lg:pt-4 pt-8">
                   {/* <div className="mr-4 p-3 text-center">
             <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
               22
             </span>
             <span className="text-sm text-blueGray-400">Friends</span>
           </div>
           <div className="mr-4 p-3 text-center">
             <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
               10
             </span>
             <span className="text-sm text-blueGray-400">Photos</span>
           </div>
           <div className="lg:mr-4 p-3 text-center">
             <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
               89
             </span>
             <span className="text-sm text-blueGray-400">Comments</span>
           </div> */}
                 </div>
               </div>
             </div>
             <div className="">
               <div className="text-center mt-12 ">
                 <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 font-bold uppercase">
                   {details.name}
                 </h3>
                 {/* <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                   <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                   {details.name}
                 </div> */}
                 <div className="mb-2 text-blueGray-600 mt-5">
                   <i className="fa fa-envelope mr-2 text-lg text-blueGray-400"></i>
                   {details.email}
                 </div>
                 <div className="mb-2 text-blueGray-600 mt-5">
                   <i className="fa fa-phone mr-2 text-lg text-blueGray-400"></i>
                   {details.phoneNumber}
                 </div>
                 {/* <div className="mb-2 text-blueGray-600 mt-5">
                   <i className=" fa fa-id-card mr-2 text-lg text-blueGray-400"></i>
                   {contractor.licenseNumber}
                 </div>
                 <div className="mb-2 text-blueGray-600">
                   <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                   {contractor.address}
                 </div> */}
               </div>
             </div>
             {/* <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
       <div className="flex flex-wrap justify-center">
         <div className="w-full lg:w-9/12 px-4">
           <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
             An artist of considerable range, Jenna the name taken
             by Melbourne-raised, Brooklyn-based Nick Murphy
             writes, performs and records all of his own music,
             giving it a warm, intimate feel with a solid groove
             structure. An artist of considerable range.
           </p>
           <a href="javascript:void(0);" className="font-normal text-pink-500">
             Show more
           </a>
         </div>
       </div>
     </div> */}
      
           </div>
           <div className='flex flex row'>
           <button
             type="submit"
             onClick={()=>addClick()}
             className="text-white  bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5  text-center dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
           >
             
             Edit Details
           </button>
           <button
             type="submit"
             onClick={()=>toWishlist()}
             className="text-white ml-3  bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5  text-center dark:bg-blue-600 dark:hover:bg-green-700 dark:focus:ring-blue-800 "
           >
             
             Wishlist
           </button>
           </div>
         </div>
       </div>
      
     </section>
     
   </div>
    </div>
  )
}

export default Profile