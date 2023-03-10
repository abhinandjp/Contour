import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userAllDetails } from "../../Redux/authSlice";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { axiosUserInstance } from "../../Instance/Axios";

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
  const [payment, setPayment] = useState(false);

  // const [description , setDescription] = useState([])
  const user = localStorage.getItem("user");
  const userEmail = useSelector(
    (state) => state.authSlice.userAllDetails.email
  );
  // console.log(userId);

  // console.log(token);
  let location = useLocation();
  const navigate = useNavigate();

  const config = {
    headers: {
        Accept: 'application/json',
        Authorization: user,
        'Content-Type': 'application/json'
    }
};


  useEffect(() => {
    let designId = location.state;
    const fetchDesigns = async () => {
      const response = await axiosUserInstance
        .post("/contractorDesigns", { Id: designId },config)
        .then((response) => {
          // console.log(response.data);
          // setDescription(response.data.description)
          const resp = response.data;
          // console.log(resp);
          setDesigns(resp);
        })
        .catch((err) => {
          console.log(err);
        });


      const userDetailNeeded = await axiosUserInstance
        .post("/getuser", { email: userEmail } , config)
        .then((response) => {
          // console.log(response.data.payment);
          setPayment(response.data.payment);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchDesigns();
  }, []);
  // console.log(description);
  console.log(designs)

  const onClickId = (email) => {
    navigate("/contactContractor", { state: email });
  };

  const handleCheckout = async () => {
    // console.log("ivide vannuu")
    const response = await axiosUserInstance
      .post("/create-checkout-session")
      .then((res) => {
        // console.log(res);
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Carousel className=" ">
        <div className=" h-32 md:h-auto md:w-1/2 lg:w-3/4 ">
          {designs.image1 ? <img className="object-contain w-full h-full" src={designs.image1} /> :
          <img className="object-contain w-full h-full" src={cKLH1} />
          }
          
        </div>
        <div className="h-32 md:h-auto md:w-1/2  lg:w-3/4 ">
        {designs.image2 ? <img className="object-contain w-full h-full" src={designs.image2} /> :
          <img className="object-contain w-full h-full" src={cKLH2} />
          }
        </div>
        <div className="flex h-32 md:h-auto md:w-1/2  lg:w-3/4 ">
        {designs.image3 ? <img className="object-contain w-full h-full" src={designs.image3} /> :
          <img className="object-contain w-full h-full" src={cKLH3} />
          }
        </div>
        {/* <div className="h-32 md:h-auto md:w-1/2  ">
                    <img className='object-contain w-full h-full' src={cKLH4} />
                </div> */}
      </Carousel>

      {/* {designs.map((element) => (      */}
      {/* key={element._id} */}
      <div className="flex items-center min-h mt-16 ">
        <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
          <div className="flex flex-col md:flex-row">
            {/* <div className="h-32 md:h-auto md:w-1/2  ">
             <img
               className="object-contain w-full h-full "
               src={cKLH1}
               alt="img"
             />
           </div> */}
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 ">
              <div className="w-full">
                <ul className="list-disc  text-base font-semibold ml-5 ">
                  <li className="list-none ml-24 mb-5 text-red-500 text-xl">
                    {designs.designName}
                  </li>
                  {designs.description &&
                    designs.description.map((ele, index) => (
                      <li className="pt-3" key={index}>
                        {/* {console.log(ele)} */}
                        {ele}
                      </li>
                    ))}
                  <li className="list-disc  text-base font-semibold ml-5">
                    {designs.cost}
                  </li>
                </ul>

                {payment ? (
                  <button
                    className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6 ml-24"
                    onClick={() => {
                      onClickId(designs.email);
                    }}
                  >
                    Contact Contractor
                  </button>
                ) : (
                  <button
                    className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6 ml-24"
                    onClick={() => {
                      handleCheckout();
                    }}
                  >
                    Contact Contractor
                  </button>
                )}

                {/* payment */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}

export default ViewDesign;
