import "./Subscribe.scss";
import Container from "@components/Container/Container";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <Container>
        <div className="subscribe__bg">
          <p className="subscribe__title">Subscribe to our Newsletter</p>
          <form className="subscribe__form">
            <input
              className="subscribe__input"
              placeholder="Your Email Address"
              type="text"
            />
            <button className="subscribe__btn">Subscribe</button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Subscribe;
