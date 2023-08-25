import React from "react";
import { Helmet } from "react-helmet-async";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";

const ManageItems = () => {
  const [axiosSecure] = useAxiosSecure();
  const [menu , ,refetch] = useMenu();
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${item._id}`)
        .then((res) => {
          console.log("deleted res", res.data);
          const data=res.data;
          if (data.deletedCount > 0) {
            refetch();
            Swal.fire('Deleted! Successfull')
          }
        });
      }
    });
  };
  return (
    <div className="w-full ml-4 px-2">
      <Helmet>
        <title>Bistro Boss | Manage Items</title>
      </Helmet>
      <SectionTitle
        subHeading="hurry up"
        heading="Manage all items"
      ></SectionTitle>
      <h3 className="uppercase text-3xl font-semibold my-4">
        total items: {menu.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-yellow-600 text-white">
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th className="text-end">Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr className="hover" key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{item.name}</div>
                  </div>
                </td>
                <td className="">
                  <div>
                    <div className="font-bold text-end"> ${item.price}</div>
                  </div>
                </td>
                <td>
                  <button className="btn btn-sm text-white bg-yellow-600">
                    <FaEdit></FaEdit>
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(item)}
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

export default ManageItems;
