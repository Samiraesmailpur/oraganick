import "./Testimonial.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { ReactComponent as Stars } from "@assets/svg/starsTestimonial.svg";

const TestimonialSwiper = () => {
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
        <SwiperSlide className="testimonial__box">
          <div className="testimonial__wrapper-stars">
            <div className="testimonial__wrapper-star">
              <Stars className="testimonial__stars" />
            </div>
            <div className="testimonial__wrapper-star">
              <Stars className="testimonial__stars" />
            </div>
            <div className="testimonial__wrapper-star">
              <Stars className="testimonial__stars" />
            </div>
            <div className="testimonial__wrapper-star">
              <Stars className="testimonial__stars" />
            </div>
          </div>
          <p className="testimonial__desc">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </p>
          <p className="testimonial__name">Sara Taylor</p>
          <p className="testimonial__consumer">Consumer</p>
        </SwiperSlide>

        <SwiperSlide className="testimonial__box">
          <div className="testimonial__wrapper-stars">
            <div className="testimonial__wrapper-star">
              <Stars className="testimonial__stars" />
            </div>
            <div className="testimonial__wrapper-star">
              <Stars className="testimonial__stars" />
            </div>
            <div className="testimonial__wrapper-star">
              <Stars className="testimonial__stars" />
            </div>
            <div className="testimonial__wrapper-star">
              <Stars className="testimonial__stars" />
            </div>
          </div>
          <p className="testimonial__desc">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </p>
          <p className="testimonial__name">Sara Taylor</p>
          <p className="testimonial__consumer">Consumer</p>
        </SwiperSlide>
        <SwiperSlide className="testimonial__box">
          <div className="testimonial__wrapper-stars">
            <div className="testimonial__wrapper-star">
              <Stars className="testimonial__stars" />
            </div>
            <div className="testimonial__wrapper-star">
              <Stars className="testimonial__stars" />
            </div>
            <div className="testimonial__wrapper-star">
              <Stars className="testimonial__stars" />
            </div>
            <div className="testimonial__wrapper-star">
              <Stars className="testimonial__stars" />
            </div>
          </div>
          <p className="testimonial__desc">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </p>
          <p className="testimonial__name">Sara Taylor</p>
          <p className="testimonial__consumer">Consumer</p>
        </SwiperSlide>
        <div className="testimonial__box-btn"></div>
      </Swiper>
    </>
  );
};

export default TestimonialSwiper;
