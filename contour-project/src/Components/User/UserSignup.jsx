import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate , Link } from "react-router-dom";
import { UserSignupSchema } from "../../Schemas/UserSignupSchema";
import { clogo } from "../../assets/User/Exports";
import { axiosUserInstance } from "../../Instance/Axios";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const UserSignup = () => {
  const [validation, setValidation] = useState("");
  let navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: UserSignupSchema,
      onSubmit: async (values, action) => {
        try {
          const response = await axiosUserInstance
            .post("/signup", values)
            .then((response) => {
              console.log(response);
              if (response.data.status === "registered") {
                setValidation(response.data.msg);
                action.resetForm();
              }
              if (response.data.status === "Existing") {
                setValidation(response.data.msg);
                action.resetForm();
              } 
              // else {
              //   navigate("/login");
              // }
            });
        } catch (err) {
          console.log(err.message);
        }
      },
    });

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        <div>
          {/* <h1 className="text-white font-bold text-4xl font-sans ">Contour</h1> */}
          <img className="w-96 h-20 " src={clogo} alt="" />
          <p className="text-amber-400 mt-8 ml-20 font-semibold">
            Making your vision become a reality.
          </p>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form onSubmit={handleSubmit} className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-1 ml-16 ">
            Sign Up
          </h1>

          {validation ? (
            <p className="text-sm font-normal text-red-600 mb-7 ml-14 mt-4">
              {validation}
            </p>
          ) : (
            " "
          )}

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 mt-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="name"
              id="name"
              placeholder="Full name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.name && touched.name ? (
            <p className="  text-red-600 font-semibold text-sm ">
              * {errors.name}
            </p>
          ) : null}

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.email && touched.email ? (
            <p className=" text-red-600 font-semibold text-sm">
              * {errors.email}
            </p>
          ) : null}
          <div className="flex items-center border-2 py-2 px-3 mt-4 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="number"
              name="number"
              id="number"
              placeholder="Phone Number"
              required
              value={values.number || ""}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.phone && touched.phone ? (
            <p className=" text-red-600 font-semibold text-sm">
              {errors.phone}
            </p>
          ) : null}
          <div className="flex items-center border-2 py-2 px-3 mt-4 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.password && touched.password ? (
            <p className=" text-red-600 font-semibold text-sm">
              * {errors.password}
            </p>
          ) : null}
          <div className="flex items-center border-2 py-2 px-3 mt-4 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.confirmPassword && touched.confirmPassword ? (
            <p className=" text-red-600 font-semibold text-sm">
              * {errors.confirmPassword}
            </p>
          ) : null}
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Sign Up
          </button>
          <span className="text-sm ml-2 ">All ready have Account ?</span>
          
          <Link to="/login" className="text-sm ml-2 text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;
