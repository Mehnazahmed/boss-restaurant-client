import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure]=useAxiosSecure();
  const {data: users = [],refetch,isLoading,} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      
      return res.data;
    },
  });
  const handleMakeAdmin =(user)=>{
  fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method: 'PATCH',
        //send accessToken from localstorage to server as headers
       
        
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
         
          refetch();
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500
          })
        }
    })
  };

  const handleDelete = () => {};
  return (
    <div className="w-full ml-4 px-2 ">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>

      <h3 className="uppercase text-3xl font-semibold my-4">
        total users: {users.length}
      </h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-yellow-600 text-white">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className="hover" key={user._id}>
                <td>{index + 1}</td>

                <td>
                  <div>
                    <div className="font-bold">{user.name}</div>
                  </div>
                </td>
                <td className="">
                  <div>
                    <div className="font-bold "> {user.email}</div>
                  </div>
                </td>
                <td className="font-bold">
                    {user.role==='admin'? 'Admin' :  <button onClick={() => handleMakeAdmin(user)} className="btn btn-sm text-white bg-yellow-500">
                    <FaUserShield></FaUserShield>
                  </button> }
                 
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-sm text-white bg-red-600"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
