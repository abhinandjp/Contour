import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "../../Pages/Contractor/SignupPage";
import Login from "../../Pages/Contractor/LoginPage";
import Home from "../../Pages/Contractor/HomePage";
import Designs from "../../Pages/Contractor/DesignPage";
import AddDesigns from "../../Components/Contractor/AddDesigns";

function ContractorRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/contractorSignup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/contractorLogin" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/contractorHome" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/contractorDesigns" element={< Designs />} />
        </Routes>
        <Routes>
          <Route path="/addDesigns" element={< AddDesigns />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ContractorRouter;
