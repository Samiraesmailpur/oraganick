import "./About.scss";
import Container from "@components/Container/Container";
import fruits from "@assets/images/fruits.png";
import { ReactComponent as Arrow } from "@assets/svg/arrow.svg";
// import { ReactComponent as Product } from "@assets/svg/product.svg";
import { ReactComponent as Mailbox } from "@assets/svg/mailbox.svg";

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
                  {/* <Product className="about-list__icon" /> */}
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
                  <Mailbox className="about-list__icon" />
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
            <button type="button" className="about__btn">
              Shop Now <Arrow className="about__arrow" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
