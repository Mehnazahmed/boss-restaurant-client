import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaSpaceShuttle, FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import "./AddReview.css";

const AddReview = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const { review, rating } = data;
    const adReview = {
      name: user?.displayName,
      email: user?.email,
      details: review,
      rating: parseInt(rating),
    };
    console.log(adReview);
    axiosSecure.post("/reviews", adReview).then((data) => {
      console.log("posting new item", data.data);
      if (data.data.insertedId) {
        reset();
        Swal.fire({
          position: "top",
          icon: "success",
          title: "successfully added!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | Add review</title>
      </Helmet>
      <SectionTitle
        subHeading="Sharing is Caring!!!"
        heading="give a review"
      ></SectionTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-2 p-8 bg-slate-100 rounded-md mt-10"
      >
        <div className="form-control">
          <div className="flex justify-center m-10">
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <label>
                  <input
                    type="radio"
                    name="rating"
                    {...register("rating", { required: true })}
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                  />
                  <FaStar
                    className="star"
                    rating={rating}
                    size={50}
                    color={
                      currentRating <= (hover || rating) ? "#d1b520" : "#e4e5e9"
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  ></FaStar>
                </label>
              );
            })}
          </div>
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-bold">
              Which recipe you liked most?
            </span>
          </label>
          <input
            type="text"
            placeholder="Recipe you liked most"
            className="input input-bordered w-full "
            {...register("recipe name", { required: true, maxLength: 80 })}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">
              Do you have any suggestion for us?
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Sugggestion"
            {...register("recipe", { required: true })}
          ></textarea>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-bold ">
              Kindly express your care in a short way.
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Review in detail"
            {...register("review", { required: true })}
          ></textarea>
        </div>
        <label className="relative">
         
          <input
            className="btn btn-sm btn-warning bg-yellow-700 mt-4 w-1/4"
            type="submit"
            value="Add Review"
          />
           <FaSpaceShuttle className="absolute top-6 left-32 text-white "></FaSpaceShuttle>
        </label>
      </form>
    </div>
  );
};

export default AddReview;
