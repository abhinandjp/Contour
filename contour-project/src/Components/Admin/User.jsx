
import React, { useEffect, useState } from "react";
import { axiosAdminInstance } from "../../Instance/Axios";
import DataTable from "react-data-table-component";

function User() {
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
        .get("/users",config)
        .then((response) => {
          console.log(response.data);
          setUser(response.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const block = async (id) => {
    try{
      const response = await axiosAdminInstance.patch("/userBlock" , {user : id},config)
      .then((resp)=>{
        setAction(resp.data);
      })
    }catch(err){
      console.log(err);
    }
  };

  const unblock = async (id) => {
    try{
      const response = await axiosAdminInstance.patch("/userUnBlock" , {user : id},config)
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
            {/* {row.blockStatus ? (
              
                // <button
                
                //   onClick={()=>unblock(row._id)}
                //   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                // >
                //   Unblock
                // </button>
              <div>
                
<button data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button>

<div id="popup-modal" tabIndex="-1" class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-md md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="p-6 text-center">
                <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Yes, I'm sure
                </button>
                <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
            </div>
        </div>
    </div>
</div>

              </div>

            ) : (
              <button
                onClick={() => block(row._id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Block
              </button>
            )} */}
          </div>
        );
      },
    }
  ];

  useEffect(() => {
    getUsers();
  }, [action]);

  return (
    <div className="pl-20 mt-5">
      <DataTable
        title="Users"
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

export default User;
