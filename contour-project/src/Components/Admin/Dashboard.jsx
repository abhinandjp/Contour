import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosAdminInstance } from "../../Instance/Axios";


function Dashboard() {

    const [usersCount,setUsersCount] = useState('')
    const [blkUsersCount,setBlkUsersCount] = useState('')
    const [subUsersCount,setsubUsersCount] = useState('')
    const [blkContsCount,setBlkContsCount] = useState('')
    const [designsCount,setDesignsCount] = useState('')



    const [contractrCount,setcontractorCount] = useState('')

    const user = localStorage.getItem('admin')
       

    useEffect(()=>{
        userCount()
        blkuserCount()
        contractorCount()
        subUserCount()
        blkContractorCount()
        designCount()
    },[usersCount,blkUsersCount,contractrCount,subUsersCount,blkContsCount,designsCount])

    const config = {
      headers: {
          Accept: 'application/json',
          Authorization: user,
          'Content-Type': 'application/json'
      }
  };

  // console.log(config);

    const userCount = ()=>{
        const response = axiosAdminInstance.get('/userCount',config).then((resp)=>{
            // console.log(resp.data);
            setUsersCount(resp.data)
        })
    }
    const blkuserCount = ()=>{
      const response = axiosAdminInstance.get('/blkUserCount',config).then((resp)=>{
          // console.log(resp.data);
          setBlkUsersCount(resp.data)
      })
  }
  const subUserCount = ()=>{
    const response = axiosAdminInstance.get('/subUserCount',config).then((resp)=>{
        // console.log(resp.data);
        setsubUsersCount(resp.data)
    })
}
  const contractorCount = ()=>{
    const response = axiosAdminInstance.get('/contractorCount',config).then((resp)=>{
      // console.log(resp.data);
      setcontractorCount(resp.data)
  })
  }
  const blkContractorCount = ()=>{
    const response = axiosAdminInstance.get('/blkContractorCount',config).then((resp)=>{
        console.log(resp.data);
        setBlkContsCount(resp.data)
    })
}

const designCount = ()=>{
  const response = axiosAdminInstance.get('/designCount',config).then((resp)=>{
      // console.log(resp.data);
      setDesignsCount(resp.data)
  })
}


  return (
    <div>
        <div className="m-12">
      <div className="flex  justify-around  flex-wrap ">
        <div className=" h-24 flex items-center justify-center bg-sky-500/75 w-72 rounded-xl mt-6 px-4 shadow-lg">
          <div className="flex-row">
            <p className="text-3xl font-bold text-center">
              {usersCount ? usersCount : 0}
            </p>
            <p className="text-lg  font-semibold">Users</p>
          </div>
        </div>
        <div className=" h-24 flex items-center justify-center bg-sky-500/75 w-72 rounded-xl mt-6 px-4 shadow-lg">
          <div className="flex-row">
            <p className="text-3xl font-bold text-center">
              {blkUsersCount ? blkUsersCount : 0}
            </p>
            <p className="text-lg  font-semibold">Blocked Users</p>
          </div>
        </div>
        <div className=" h-24 flex items-center justify-center bg-sky-500/75 w-72 rounded-xl mt-6 px-4 shadow-lg">
            <div className="flex-row">
              <p className="text-3xl  font-bold text-center">
                {subUsersCount ? subUsersCount : 0}
              </p>
              <p className="text-lg  font-semibold">Subscribed Users</p>
            </div>
          </div>
        <div className=" h-24 flex items-center justify-center bg-sky-500/75 w-72 rounded-xl mt-6 px-4 shadow-lg">
          <div className="flex-row">
            <p className="text-3xl  font-bold text-center">
              {contractrCount ? contractrCount : 0}
            </p>
            <p className="text-lg  font-semibold">Contractors</p>
          </div>
        </div>
        <div className=" h-24 flex items-center justify-center bg-sky-500/75 w-72 rounded-xl mt-6 px-4 shadow-lg">
          <div className="flex-row">
            <p className="text-3xl font-bold text-center">
              {blkContsCount ? blkContsCount : 0}
            </p>
            <p className="text-lg  font-semibold">Blocked Contractor</p>
          </div>
        </div>
        
          {' '}
          <div className=" h-24 flex items-center justify-center bg-sky-500/75 w-72 rounded-xl mt-6 px-4 shadow-lg hover:cursor-pointer">
            <div className="flex-row">
              <p className="text-3xl  font-bold text-center">
                {designsCount ? designsCount : 0}
              </p>
              <p className="text-lg  font-semibold ">Total Designs</p>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard