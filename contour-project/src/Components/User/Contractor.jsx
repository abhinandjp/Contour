import React, { useEffect, useState } from 'react'
import { axiosUserInstance } from "../../Instance/Axios";
import { useLocation , useNavigate } from 'react-router-dom';


function Contractor() {

  const user = localStorage.getItem("user");
  const [profile, setProfile] = useState("")

  const navigate = useNavigate();

  let location = useLocation();
  // console.log(location.state);

  const config = {
    headers: {
        Accept: 'application/json',
        Authorization: user,
        'Content-Type': 'application/json'
    }
};

  useEffect(() => {
    let profileId = location.state
    const fetchProfile = async () => {   
      
      const response = await axiosUserInstance
        .post("/getContractor",{user : profileId},config)
        
        .then((response) => {
          setProfile(response.data)
         
        }).catch((err)=>{
          console.log(err);
        })
    };
    fetchProfile();
  }, []);

  console.log("profilee",profile);

  const onClickId = (email)=>{
    console.log(email);
    navigate("/specificContractor", { state: email });
    
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
      <section className="pt-16 bg-blueGray-50">
        <div className="w-full lg:w-4/12 px-4 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 flex justify-center">
                  <div className="relative">
                    <img
                      alt="..."
                      src={profile.image}
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    ></img>
                    
                  </div>
                </div>
                <div className="w-full px-4 text-center mt-20">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                   
                  </div>
                </div>
              </div>
              <div className="">
                <div className="text-center mt-12">
                  <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                    {profile.name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    {profile.city} , {profile.state}
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-5">
                    <i className="fa fa-envelope mr-2 text-lg text-blueGray-400"></i>
                    {profile.email}
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-5">
                    <i className="fa fa-phone mr-2 text-lg text-blueGray-400"></i>
                    {profile.phoneNumber}
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-5">
                    <i className=" fa fa-id-card mr-2 text-lg text-blueGray-400"></i>
                    {profile.licenseNumber}
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    {profile.address}
                  </div>
                </div>
              </div>
             
       
            </div>

            <div className='flex flex-row '>
            {/* <button
              type="submit"
            //   onClick={()=>addClick()}
              className="text-white  bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5  text-center dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            >
              
              Chat with Me
            </button> */}
            <button
              type="submit"
            //   onClick={()=>addClick()}
            onClick={()  => {
              onClickId(profile.email)
              
             }}
              className="text-white ml-4 bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5  text-center dark:bg-blue-800 dark:hover:bg-green-600 dark:focus:ring-blue-800 "
            >
              
             View All Construction
            </button>
            </div>
          </div>
        </div>
       
      </section>
    </div>
  )
}

export default Contractor