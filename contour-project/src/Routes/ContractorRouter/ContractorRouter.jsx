import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "../../Pages/Contractor/SignupPage";
import Login from "../../Pages/Contractor/LoginPage";
import Home from "../../Pages/Contractor/HomePage";
import Designs from "../../Pages/Contractor/DesignPage";
import AddDesigns from "../../Components/Contractor/AddDesigns";
import EditDesigns from "../../Components/Contractor/EditDesigns";
import ProfileEdit from "../../Components/Contractor/ProfileEdit";
import AboutPage from "../../Pages/Contractor/AboutPage";
import ProtectRoute from "./ProtectRoute";

// import ErrorPage from "../../Components/Contractor/ErrorPage";



function ContractorRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/contractorSignup" element={<Signup />} />
        
          <Route path="/contractorLogin" element={<Login />} />

          <Route element={<ProtectRoute/>}>

        
          <Route path="/contractorHome" element={<Home />} />
       
          <Route path="/contractorDesigns" element={< Designs />} />
        
          <Route path="/addDesigns" element={< AddDesigns />} />

          <Route path="/editDesigns" element={< EditDesigns />} />

          <Route path="/editProfile" element={< ProfileEdit />} />

          <Route path="/about" element={< AboutPage />} />

          </Route>


          {/* <Route path="*" element={< ErrorPage />} /> */}


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ContractorRouter;
