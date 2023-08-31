import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaShoppingCart, FaStar, FaWallet } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: stats = [] } = useQuery({
    queryKey: ["user-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get(`user-stats?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <div className="w-full m-4">
      <h3 className="text-3xl">Welcome Back, {user.displayName}</h3>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Users</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
      <div className="flex p-6">
        <div className="bg-red-100 border-2 w-full max-w-xs">
            {
                <div className="avatar flex-col grid justify-items-center p-5">
                <div className="w-24 rounded-full">
                  <img src={user?.photoURL} />
                </div>
                <h3 className="text-xl font-['Cinzel'] mt-6 ">{user?.displayName}</h3>
              </div>
            }

        </div>
        <div className="bg-yellow-100 border-2 w-full max-w-xs"> 
             <h3 className="text-xl font-['Cinzel'] mt-6 text-center "> Your Activities</h3>
             <div className="flex-col grid justify-items-center p-2 uppercase ">
               <div className="flex text-sky-500">
               <FaShoppingCart className=" mb-1 "></FaShoppingCart> <p className="text-xs ms-2">orders: {stats.orders}</p>
               </div>
               <div className="flex text-green-400">
               <FaStar className=" mb-1	"></FaStar> <p className="text-xs ms-2">reviews: {stats.reviews}</p>
               </div>
               <div className="flex text-red-400">
               <FaWallet 	></FaWallet> <p className="text-xs ms-2">payments: {stats.payments}</p>
               </div>
               
                
                
             </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
