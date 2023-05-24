/* eslint-disable react/jsx-key */
import SectionTitle from "../../../Compnents/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <div>
      <SectionTitle
        subHeading={"What our Client Say"}
        heading={"Testimonials"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center m-24 space-y-3">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <img className="my-15 w-[100px] h-[100px]" src="https://i.ibb.co/gWYkpcn/image-removebg-preview-1.png" alt="" />
                <p className="text-center">{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
