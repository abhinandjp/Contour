import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'



const useAuth = () => {
    const token = useSelector((state) => state.authSlice.adminToken)
    const admin = token
    return admin && token
}

const ProtectRoute = () => {
    const isAuth = useAuth()
    return isAuth ? <Outlet /> : <Navigate to='/adminLogin' />
}

export default ProtectRoute