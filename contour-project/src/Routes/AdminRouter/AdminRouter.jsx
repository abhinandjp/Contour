import React from 'react'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contractor from '../../Pages/Admin/ContractorPage';
import Designs from '../../Pages/Admin/DesignPage';
import AdminLogin from '../../Pages/Admin/LoginPage';
import User from '../../Pages/Admin/UserPage';

function AdminRouter() {
  
  
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/adminLogin" element={<AdminLogin/>} />       
          <Route path="/adminUser" element={<User/>} />       
          <Route path="/adminContractor" element={<Contractor/>} />
          <Route path="/adminDesigns" element={<Designs/>} />

        </Routes>
       
      </BrowserRouter>
    </div>
  )
}

export default AdminRouter