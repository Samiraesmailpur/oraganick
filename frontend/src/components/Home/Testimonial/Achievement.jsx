import "./Testimonial.scss";

const Achievement = () => {
  return (
    <div className="testimonial__achievement-block">
      <div className="testimonial__achievement-box">
        <p className="testimonial__amount">100%</p>
        <p className="testimonial__text">Organic</p>
      </div>
      <div className="testimonial__achievement-box">
        <p className="testimonial__amount">285</p>
        <p className="testimonial__text">Active Product</p>
      </div>
      <div className="testimonial__achievement-box">
        <p className="testimonial__amount">350+</p>
        <p className="testimonial__text">Organic Orchads</p>
      </div>
      <div className="testimonial__achievement-box">
        <p className="testimonial__amount">25+</p>
        <p className="testimonial__text">Years of Farming</p>
      </div>
    </div>
  );
};

export default Achievement;
