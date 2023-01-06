import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosContractorInstance } from "../../Instance/Axios";

import Navbar from "./Navbar";

function AddDesigns() {
  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  const [arr, setArr] = useState(inputArr);
  const [result , setResult] = useState('')
  const addInput = (e) => {
    e.preventDefault();
    setArr((s) => {
      return [...s, { type: "text", value: "" }];
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };



  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data,arr)=>{
    try{
      const formData = {
        inp : data,
        array : arr
      }
      const response = await axiosContractorInstance
            .post("/addDesigns", formData)
            .then((response)=>{
              // console.log(response.data.data);
              setResult(response.data.data)
              reset()
              
              
            })
      
    }catch(err){
      console.log(err.message);
    }
    console.log( arr , data);
        
  }
  
  // console.log(arr);

  return (
    <div>
      <Navbar/>
      <div className="">
        
<div class=" flex row-span-1 flex-wrap justify-center mb-4 mt-4 font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">New Design</span> </div>
<div>
{result ? (
            <p className=" flex justify-center  text-xl font-normal text-sky-500 mb-7 ml-14 mt-6">
              {result}
            </p>
          ) : " "}

      </div>
      </div>
      <form onSubmit={handleSubmit(data => onSubmit(data,arr))}>
        <div className="ml-20 mt-16 mr-20">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="designType"
              id="designType"
              autoComplete="off"
              // onChange={handleChange}
              //  value={values.designType}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              {...register("designType")}
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Design Type
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            {arr.map((item, i) => {
             
              return (
                <>
                  <div className="grid grid-rows-2 relative z-0  w-full group">
                    <input
                    
                      onChange={handleChange}
                      value={item.value}
                      id={i}
                      type={item.type}
                      autoComplete="off"
                      // {...register(`description${[i]}`)}
                      size="40"
                      name="floating_last_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                     htmlFor="floating_last_name"
                      className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Description 
                    </label>
                  </div>
                </>
              );
            })}

          
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="text-black   bg-blue-700 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm  sm:w-auto px-5 py-2.5   text-center dark:bg-blue-600 dark:hover:bg-green-500 dark:focus:ring-blue-800 mb-4  "
              onClick={addInput}
            >
              Add Description
            </button>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="cost"
              id="cost"
              autoComplete="off"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              {...register("cost")}
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Cost of Project
            </label>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddDesigns;
