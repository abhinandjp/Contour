// import React from 'react'
import React, { useEffect, useState } from "react";
import { axiosAdminInstance } from "../../Instance/Axios";
import DataTable from "react-data-table-component";


function Subscription() {
  const [user, setUser] = useState([]);
  const [action,setAction] = useState([])
  const userT = localStorage.getItem('admin')

  const config = {
    headers: {
        Accept: 'application/json',
        Authorization: userT,
        'Content-Type': 'application/json'
    }
};

  const getUsers = async () => {
    try {
      const response = await axiosAdminInstance
        .get("/subUsers",config)
        .then((response) => {
          console.log(response.data);
          setUser(response.data)
        });
    } catch (err) {
      console.log(err);
    }
    // console.log(user);
  };

  const block = async (id) => {
    try{
      const response = await axiosAdminInstance.patch("/userBlock" , {user : id})
      .then((resp)=>{
        setAction(resp.data);
      })
    }catch(err){
      console.log(err);
    }
  };

  const unblock = async (id) => {
    try{
      const response = await axiosAdminInstance.patch("/userUnBlock" , {user : id})
      .then((resp)=>{
        setAction(resp.data);
      })
    }catch(err){
      console.log(err);
    }
  };

  const columns = [
    {
      name: "User Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone Number ",
      selector: (row) => row.phoneNumber,
    },
    // 
  ];

  useEffect(() => {
    getUsers();
  }, [action]);

  return (
    <div className="pl-20 mt-5">
      <DataTable
        title="Subscribed"
        columns={columns}
        data={user}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="482px"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
      />
    </div>
  );
}

export default Subscription