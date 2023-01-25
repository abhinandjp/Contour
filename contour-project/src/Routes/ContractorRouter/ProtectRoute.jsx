import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'



const useAuth = () => {
    const token = useSelector((state) => state.authSlice.contractorToken)
    const contractor = token
    return contractor && token
}

const ProtectRoute = () => {
    const isAuth = useAuth()
    return isAuth ? <Outlet /> : <Navigate to='/contractorLogin' />
}

export default ProtectRoute