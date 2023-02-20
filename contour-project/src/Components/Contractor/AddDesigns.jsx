import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosContractorInstance } from "../../Instance/Axios";
import Axioss from "axios";
import jwt_decode from "jwt-decode";
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
  const [result, setResult] = useState("");
  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [upld, setupld] = useState("");
  const [upld1, setupld1] = useState("");
  const [upld2, setupld2] = useState("");
  let [loading, setLoading] = useState(false);
  let [loading1, setLoading1] = useState(false);
  let [loading2, setLoading2] = useState(false);

  const userC = localStorage.getItem("user");

  // console.log(image.imagee);
  let token = localStorage.getItem("contractor");
  // console.log(token);
  // console.log("haiiii");

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

  const uploadImage = async () => {
    setLoading(true);
    try {
      console.log("ith image uploadd");
      const imageData = new FormData();
      imageData.append("file", image);
      imageData.append("upload_preset", "df0iersr");
      const response = await Axioss.post(
        "https://api.cloudinary.com/v1_1/di73majjo/image/upload/",
        imageData
      ).then((response) => {
        // console.log(response.data);
        setLoading(false);
        setupld(response.data.url);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const uploadImage1 = async () => {
    setLoading1(true);

    try {
      console.log("ith image uploadd");
      const imageData = new FormData();
      imageData.append("file", image1);
      imageData.append("upload_preset", "df0iersr");
      const response = await Axioss.post(
        "https://api.cloudinary.com/v1_1/di73majjo/image/upload/",
        imageData
      ).then((response) => {
        // console.log(response.data);
        setLoading1(false);
        setupld1(response.data.url);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const uploadImage2 = async () => {
    setLoading2(true);
    try {
      console.log("ith image uploadd");
      const imageData = new FormData();
      imageData.append("file", image2);
      imageData.append("upload_preset", "df0iersr");
      const response = await Axioss.post(
        "https://api.cloudinary.com/v1_1/di73majjo/image/upload/",
        imageData
      ).then((response) => {
        // console.log(response.data);
        setLoading2(false);
        setupld2(response.data.url);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data, arr) => {
    const user = jwt_decode(token);
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: userC,
        "Content-Type": "application/json",
      },
    };
    // console.log(user);
    try {
      const formData = {
        inp: data,
        array: arr,
        email: user.email,
        bImage : upld,
        bImage1 : upld1,
        bImage2 : upld2
      };
      console.log("ithh form submitt");
      console.log(formData);
      const response = await axiosContractorInstance
        .post("/addDesigns", formData, config)
        .then((response) => {
          console.log(response.data.data);
          setResult(response.data.data);
          reset();
        });
    } catch (err) {
      console.log(err.message);
    }
  };

  // console.log(arr);

  return (
    <div>
      <Navbar />
      <div className="">
        <div class=" flex row-span-1 flex-wrap justify-center mb-4 mt-4 font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            New Design
          </span>{" "}
        </div>
        <div>
          {result ? (
            <p className=" flex justify-center  text-xl font-normal text-sky-500 mb-7 ml-14 mt-6">
              {result}
            </p>
          ) : (
            " "
          )}
        </div>
      </div>
      <div className="flex justify-center flex-wrap ">
        <input
          type="file"
          multiple
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        {loading ? (
          <div role="status">
            <svg
              aria-hidden="true"
              class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          ""
        )}
        <button
          // type="submit"
          className=" text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          onClick={uploadImage}
        >
          Upload
        </button>
        <input
          type="file"
          multiple
          onChange={(e) => {
            setImage1(e.target.files[0]);
          }}
        />
        {loading1 ? (
          <div role="status">
            <svg
              aria-hidden="true"
              class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          ""
        )}
        <button
          // type="submit"
          className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          onClick={uploadImage1}
        >
          Upload
        </button>
        <input
          type="file"
          multiple
          onChange={(e) => {
            setImage2(e.target.files[0]);
          }}
        />
        {loading2 ? (
          <div role="status">
            <svg
              aria-hidden="true"
              class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          ""
        )}
        <button
          // type="submit"
          className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          onClick={uploadImage2}
        >
          Upload
        </button>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log("sidique idea");
          onSubmit(data, arr);
        })}
      >
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

          <div className="flex justify-center pt-7">
            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5  text-center dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
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
