import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from "react-redux";


function About() {

  const [cont , setCont] = useState("")
  const contractor = useSelector((state)=>state.authSlice.contractorAllDetails)
    // setCont(contractor)
  
  useEffect(()=>{
    setCont(contractor)
   
  },[])

  console.log("contttt",cont);


  return (
    <div>
        <div class="bg-gray-200 min-h-fit p-6">
  <div class="container mx-auto">
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2">
        {/* <img class="w-32 h-32 rounded-full mx-auto mb-6" src="profile-pic.jpg" alt="Profile Picture"> */}
        <h1 class="text-2xl font-medium mb-2">I'm {cont.name}</h1>
        <p class="text-gray-700 mb-6">Contractor</p>
        <p class="text-gray-700 mb-6">{cont.about}</p>
        {/* <div class="flex">
          <a href="#" class="bg-blue-500 text-white py-2 px-4 rounded-full mr-4">Download CV</a>
          <a href="#" class="bg-blue-500 text-white py-2 px-4 rounded-full">Contact Me</a>
        </div> */}
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default About