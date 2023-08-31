import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentHistory = () => {
  const { user,loading } = useAuth();
   const [axiosSecure] =useAxiosSecure();
   const {data:payments=[]}=useQuery({
    queryKey:['payments'],
    
    queryFn: async ()=>{
      const res = await axiosSecure.get(`/payments?email=${user?.email}`)
        return res.data;
    }
   })

    return (
        <div className="w-full  ml-4 px-2">
       <SectionTitle heading='payment history'
       subHeading='At a glance'
       ></SectionTitle>
       <Helmet> <title>Bistro Boss | Payment History</title></Helmet>
      

      

      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-yellow-600 text-white">
              
              
              <th>Email</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
             {payments.map(payment => (
              <tr className="hover" key={payment._id}>
                

                <td>
                  <div>
                    <div className="font-bold">{payment.email}</div>
                  </div>
                </td>
                <td >
                  <div>
                    <div className="font-bold "> {payment.quantity}</div>
                  </div>
                </td>
                <td >
                  <div>
                    <div className="font-bold "> ${payment.price}</div>
                  </div>
                </td>
                <td >
                  <div>
                    <div className="font-bold "> {payment.date}</div>
                  </div>
                </td>
                
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default PaymentHistory;