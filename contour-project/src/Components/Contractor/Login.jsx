import React, { useState } from "react";
import { axiosContractorInstance } from "../../Instance/Axios";
import { useFormik } from "formik";
import { useNavigate , Link } from "react-router-dom";
import { ContractorLoginSchema } from "../../Schemas/ContractorLogin";
import { clogo } from "../../assets/User/Exports";

const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const [validation, setValidation] = useState("");
  let navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: ContractorLoginSchema,
      onSubmit: async (values, action) => {
        try {
          const response = await axiosContractorInstance
            .post("/contractorLogin", values)
            .then((response) => {
              if (response.data.status === "noContractor") {
                setValidation(response.data.data);
                action.resetForm();
              } else if (response.data.status === "inctPassword") {
                setValidation(response.data.data);
                action.resetForm();
              } else {
                localStorage.setItem("contractor", response.data.contractor);
                navigate("/contractorHome");
              }
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
            Constructing homes with pride
          </p>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form onSubmit={handleSubmit} className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-7 ml-6">
            Contractor Login
          </h1>
          {validation ? (
            <p className="text-sm font-normal text-red-600 mb-7 ml-14 mt-4">
              {validation}
            </p>
          ) : (
            <p className="text-sm font-normal text-gray-600 mb-7 ml-14 mt-4">
              Welcome Back
            </p>
          )}

          {/* // <p className="text-sm font-normal text-gray-600 mb-7 ml-14 mt-4">
          //   Welcome Back
          // </p> */}

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
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Login
          </button>
          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            Create new Account ?
          </span>
          {/* <a
            href="/contractorSignup"
            className="text-sm ml-2 text-blue-600 dark:text-blue-500 hover:underline"
          >
            Signup
          </a> */}
           <Link to="/contractorSignup" className="text-sm ml-2 text-blue-600 dark:text-blue-500 hover:underline">Signup</Link>

        </form>
      </div>
    </div>
  );
}

export default Login;
