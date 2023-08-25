import React from "react";
import { Helmet } from "react-helmet";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
  const [cart,refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const handleDelete=(item)=>{

    Swal.fire({
      title: 'Are You Sure?',
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes Delete It'
    })
    .then(result=>{
      if(result.isConfirmed){
        fetch(`http://localhost:5000/carts/${item._id}`,{
          method:'DELETE'
        }).then(res=>res.json())
      .then(data=>{
        if(data.deletedCount>0){
          refetch();
          Swal.fire('Deleted! Successfull')
        }
      })
      }
    })
  }
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="uppercase font-semibold h-[60px] items-center flex justify-evenly">
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
        <h3 className="text-3xl">Total Price: ${total.toFixed(2)}</h3>
       <Link to='/dashboard/payment'> <button className="btn btn-sm btn-warning">Pay</button></Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-base-200" >
              <th>
               #
              </th>
              <th>Food</th>
              <th>Item Name</th>
              <th className="text-end">Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((item,index)=><tr className="hover" key={item._id}>
                <td >
                  {index+1}
                </td>
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
                  <button onClick={()=>handleDelete(item)}className="btn btn-sm text-white bg-red-600"><FaTrashAlt></FaTrashAlt></button>
                </td>
              </tr>)
            }
           
           
            
            
           
           
            
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default MyCart;
