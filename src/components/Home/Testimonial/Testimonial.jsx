import "./Testimonial.scss";
import Container from "@components/Container/Container";
import TestimonialSwiper from "./TestimonialSwiper";
import Achievement from "./Achievement";

const Testimonial = () => {
  return (
    <section className="testimonial">
      <Container>
        <p className="testimonial__pre-title">Testimonial</p>
        <h3 className="testimonial__title">What Our Customer Saying?</h3>
        <TestimonialSwiper />
        <Achievement />
      </Container>
    </section>
  );
};

export default Testimonial;
