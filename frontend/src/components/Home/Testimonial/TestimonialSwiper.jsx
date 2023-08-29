import "./Testimonial.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { starsRating } from "@helpers/starsRating";
import Customer from "../../../assets/images/customer.png";

const TestimonialSwiper = () => {
  const sliderData = [
    {
      id: 1,
      image: Customer,
      rating: 5,
      fullName: "Sara Taylor",
      userType: "Consumer",
      comment:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    },
    {
      id: 2,
      image: Customer,
      rating: 4,
      fullName: "Daniel Anderson",
      userType: "Consumer",
      comment:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    },
    {
      id: 3,
      image: Customer,
      rating: 5,
      fullName: "Emily Johnson",
      userType: "Consumer",
      comment:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        speed={800}
        centeredSlides={true}
        pagination={{
          clickable: true,
          el: ".testimonial__box-btn",
          bulletClass: "testimonial__btn",
          bulletActiveClass: "testimonial__btn-active",
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {sliderData.map(
          ({ id, image, rating, fullName, userType, comment }) => (
            <SwiperSlide className="testimonial__box" key={id}>
              <img
                src={image}
                alt={fullName}
                className="testimonial__image"
              />
              <div className="testimonial__wrapper-stars">
                {starsRating(rating)}
              </div>
              <p className="testimonial__desc">{comment}</p>
              <p className="testimonial__name">{fullName}</p>
              <p className="testimonial__consumer">{userType}</p>
            </SwiperSlide>
          )
        )}
        <div className="testimonial__box-btn"></div>
      </Swiper>
    </>
  );
};

export default TestimonialSwiper;
