import React from 'react'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from '../../Pages/Admin/LoginPage';
import User from '../../Pages/Admin/UserPage';

function AdminRouter() {
  
  
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/adminLogin" element={<AdminLogin/>} />
        </Routes>
        <Routes>
          <Route path="/adminUser" element={<User/>} />
        </Routes>
       
      </BrowserRouter>
    </div>
  )
}

export default AdminRouter