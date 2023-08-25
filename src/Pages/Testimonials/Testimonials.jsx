import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

// Import Swiper styles
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className=" my-20">
      <SectionTitle
        subHeading={"---What Our Clients Say---"}
        heading={"testimonials"}
      ></SectionTitle>

      <div className="">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center mx-24 my-16" >
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  
                />
                <p className="py-4">{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
