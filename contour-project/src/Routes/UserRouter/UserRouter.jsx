import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserLogin from "../../Pages/User/LoginPage";
import UserSignup from "../../Pages/User/SignupPage";
import Home from "../../Pages/User/HomePage";
import Services from "../../Pages/User/ServicesPage";
import Designs from "../../Pages/User/DesignPage";
import Viewdesigns from "../../Pages/User/Viewdesigns";
import ActivationPage from "../../Pages/User/ActivationPage";
import Contractor from "../../Pages/User/ContactContractor";
import SpecificContractor from "../../Pages/User/Specific";
import ErrorPage from "../../Components/User/ErrorPage";
import ProtectRoute from "./ProtectRoute";
import Checkout from "../../Pages/User/Checkout";
import ProfilePage from "../../Pages/User/ProfilePage";
import ProfileEditPage from "../../Pages/User/ProfileEditPage";
import WishlistPage from "../../Pages/User/WishlistPage";


function UserRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<UserLogin />} />
        
          <Route path="/signup" element={<UserSignup />} />
        
          <Route path="/" element={<Home />} />
        
          <Route path="/services" element={<Services />} />
       
          <Route path="/designs" element={<Designs />} />
        
          <Route exact path="/user/activation/:activation_token" element={<ActivationPage />} />
        


          <Route element={<ProtectRoute/>}>

          <Route path="/viewDesigns" element={<Viewdesigns/>} />

          <Route path="/wishlist" element={<WishlistPage/>} />


          <Route path="/profile" element={<ProfilePage/>} />  

          <Route path="/profileEdit" element={<ProfileEditPage/>} />         

          <Route path="/contactContractor" element={<Contractor/>} />

          <Route path="/checkout-success" element={<Checkout/>} />

          <Route path="/specificContractor" element={<SpecificContractor/>} />
          
          </Route>

          {/* <Route path="*" element={<ErrorPage/>} /> */}





        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default UserRouter;
