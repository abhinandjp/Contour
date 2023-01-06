import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { axiosUserInstance } from "../../Instance/Axios";
import DataTable from 'react-data-table-component'

function User() {

  const [user , setUser] = useState([])

  const getUsers = async () =>{
    try{
      
      const response = await axiosUserInstance.get('/users')
      .then((response)=>{
       console.log(response.data);
        setUser(response.data)
      })
    }catch(err){
      console.log(err);
    }
  }

  const columns =[
    {
      name : "User Name",
      selector : row => row.name
    },
    {
      name : "Email",
      selector : row => row.email
    },
    {
      name : "Phone Number ",
      selector : row => row.phoneNumber
    },
    {
      name : "Block" ,
      cell : (row)=>(
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded" onClick={()=>(row._id)}>
  Block
</button>

      )
      
    }
    
  ]
  
  useEffect(()=>{
    getUsers()
  },[])

  return (
    <div className='pl-20 mt-5'>
      <DataTable title ='Users' columns={columns}  data={user} pagination fixedHeader fixedHeaderScrollHeight='482px' selectableRows selectableRowsHighlight highlightOnHover />
    </div>
  )
}

export default User