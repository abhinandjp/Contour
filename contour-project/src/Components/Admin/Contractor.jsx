
import React, { useEffect, useState } from "react";
import { axiosAdminInstance } from "../../Instance/Axios";
import DataTable from "react-data-table-component";


function Contractor() {
    const [contractor, setContractor] = useState([]);
  const [action,setAction] = useState([])
  const user = localStorage.getItem('admin')

  const config = {
    headers: {
        Accept: 'application/json',
        Authorization: user,
        'Content-Type': 'application/json'
    }
};

  const getContractor = async () => {
    try {
      const response = await axiosAdminInstance
        .get("/contractors",config)
        .then((response) => {
          console.log(response.data);
          setContractor(response.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const block = async (id) => {
    try{
      const response = await axiosAdminInstance.patch("/contractorBlock" , {user : id},config)
      .then((resp)=>{
        setAction(resp.data);
      })
    }catch(err){
      console.log(err);
    }
  };

  const unblock = async (id) => {
    try{
      const response = await axiosAdminInstance.patch("/contractorUnBlock" , {user : id},config)
      .then((resp)=>{
        setAction(resp.data);
      })
    }catch(err){
      console.log(err);
    }
  };

  const columns = [
    {
      name: "Contractor Name",
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
    {
      name: 'Action',
      selector: (row) => {
        return (
          <div>
            {row.blockStatus ? (
              
                <button
                
                  onClick={()=>unblock(row._id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Unblock
                </button>

            ) : (
              <button
                onClick={() => block(row._id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Block
              </button>
            )}
          </div>
        );
      },
    }
  ];

  useEffect(() => {
    getContractor();
  }, [action]);
  return (
    <div><div className="pl-20 mt-5">
    <DataTable
      title="Users"
      columns={columns}
      data={contractor}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="482px"
      selectableRows
      selectableRowsHighlight
      highlightOnHover
    />
  </div></div>
  )
}

export default Contractor