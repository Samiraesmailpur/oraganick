import "./About.scss";
import Container from "@components/Container/Container";
import fruits from "@assets/images/fruits.png";
import { ReactComponent as Arrow } from "@assets/svg/arrow.svg";
import Mailbox from "@assets/images/mailbox.png";
import VeganFood from "@assets/images/veganFood.png";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <Container>
        <div className="about__content">
          <div className="about__box-image">
            <img className="about__image" src={fruits} alt="fruits" />
          </div>
          <div className="about__box-content">
            <p className="about__pre-title">About Us</p>
            <h2 className="about__title">
              We Believe in Working Accredited Farmers
            </h2>
            <p className="about__desc">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <ul className="about-list">
              <li className="about-list__item">
                <div className="about-list__bg">
                  <img
                    src={VeganFood}
                    alt="Vegan Food"
                    className="about-list__image"
                  />
                </div>
                <div className="about-list__box">
                  <p className="about-list__title">Organic Foods Only</p>
                  <p className="about-list__desc">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </div>
              </li>
              <li className="about-list__item">
                <div className="about-list__bg">
                  <img
                    src={Mailbox}
                    alt="Mailbox"
                    className="about-list__image"
                  />
                </div>
                <div className="about-list__box">
                  <p className="about-list__title">Quality Standards</p>
                  <p className="about-list__desc">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </div>
              </li>
            </ul>
            <NavLink to="/shop" className="about__link">
              Shop Now <Arrow className="about__arrow" />
            </NavLink>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
