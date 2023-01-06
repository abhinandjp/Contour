import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserLogin from "../../Pages/User/LoginPage";
import UserSignup from "../../Pages/User/SignupPage";
import Home from "../../Pages/User/HomePage";
import Services from "../../Pages/User/ServicesPage";
import Designs from "../../Pages/User/DesignPage";
import Viewdesigns from "../../Pages/User/Viewdesigns";

function UserRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<UserLogin />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<UserSignup />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/services" element={<Services />} />
        </Routes>
        <Routes>
          <Route path="/designs" element={<Designs />} />
        </Routes>
        <Routes>
          <Route path="/viewDesigns" element={<Viewdesigns/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default UserRouter;
