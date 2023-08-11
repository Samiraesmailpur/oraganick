import { ReactComponent as Arrow } from "@assets/svg/arrow.svg";
import Container from "@components/Container/Container";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero__bg">
          <p className="hero__pre-title">100% Natural Food</p>
          <h1 className="hero__title">Choose the best healthier way of life</h1>
          <button className="hero__btn" type="button">
            Explore Now <Arrow />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
