import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import CheckOutForm from "./CheckOutForm";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Key);
const Payment = () => {
    const [cart] =useCart();
    const total =cart.reduce((sum,item)=>sum+item.price,0);
    const price =parseFloat(total.toFixed(2))
  return (
    <div className="w-full ">
      <SectionTitle
        heading="payment"
        subHeading="please proceed"
      ></SectionTitle>
      
     <div className="m-10 p-10">
     <Elements stripe={stripePromise}>
        <CheckOutForm price={price} cart={cart} />
      </Elements>
     </div>
    </div>
  );
};

export default Payment;
