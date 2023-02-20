import React from 'react'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contractor from '../../Pages/Admin/ContractorPage';
import DashboardPage from '../../Pages/Admin/DashboardPage';
import Designs from '../../Pages/Admin/DesignPage';
import AdminLogin from '../../Pages/Admin/LoginPage';
import SubscriptionPage from '../../Pages/Admin/SubscriptionPage';
import User from '../../Pages/Admin/UserPage';
import ProtectRoute from "./ProtectedRoute";


function AdminRouter() {
  
  
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/adminLogin" element={<AdminLogin/>} /> 

          <Route element={<ProtectRoute/>} >

          <Route path="/adminDashboard" element={<DashboardPage/>} />       
          <Route path="/adminUser" element={<User/>} />       
          <Route path="/adminContractor" element={<Contractor/>} />
          <Route path="/adminDesigns" element={<Designs/>} />
          <Route path="/subscription" element={<SubscriptionPage/>} />

          </Route>

        </Routes>
       
      </BrowserRouter>
    </div>
  )
}

export default AdminRouter