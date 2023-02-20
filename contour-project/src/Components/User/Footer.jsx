import React from "react";
import { useSelector } from "react-redux";
import { userToken } from "../../Redux/authSlice";
import { Link } from "react-router-dom";

function Footer() {

  const ctoken = useSelector((state)=>state.authSlice.userToken)

    console.log("tokennnn",ctoken);

  return (
    <div>
      <footer className="bg-slate-600 text-center  lg:pl-40 mt-10 ">
        <div className="container p-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2">
            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5 text-black-800">
                Quick Links
              </h5>

              <ul className="list-none mb-0">
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="#">About Us</Link>
                  
                </li>
               
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5 text-black-800">
                Support
              </h5>

              <ul className="list-none mb-0">
                <li>
                <Link to="#">Feedback</Link>
                </li>
                <li>
                <li>
                <Link to="#">Report</Link>
                </li>
                </li>
               
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5 text-black-800">
                Legal
              </h5>

              <ul className="list-none mb-0 ">
                <li>
                <Link to="#">Privacy Policy</Link>
                 
                </li>
                <li>
                <Link to="#">Terms & Conditions</Link>

                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
