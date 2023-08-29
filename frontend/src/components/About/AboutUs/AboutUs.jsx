import "./AboutUs.scss";
import Container from "@components/Container/Container";
import Vegetables from "@assets/images/vegetables.png";
import { ReactComponent as Arrow } from "@assets/svg/arrow.svg";
import Tractor from "@assets/images/tractor.png";
import ChemicalPlant from "@assets/images/chemicalPlant.png";

const AboutUs = () => {
  return (
    <section className="about-us">
      <Container>
        <div className="about-us__flex-container">
          <div className="about-us__box-image">
            <img
              className="about-us__image"
              src={Vegetables}
              alt="Vegetables"
            />
          </div>
          <div className="about-us__box-content">
            <p className="about-us__pre-title">About Us</p>
            <h3 className="about-us__title">
              We do Creative Things for Success
            </h3>
            <p className="about-us__desc">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley. Simply dummy
              text of the printing and typesetting industry. Lorem had ceased to
              been the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley.
            </p>
            <ul className="about-us__list">
              <li className="about-us__item">
                <img className="about-us__img" src={Tractor} alt="Tractor" />
                <p className="about-us__text"> Modern Agriculture Equipment</p>
              </li>
              <li className="about-us__item">
                <img src={ChemicalPlant} alt="Chemical Plant" />
                <p className="about-us__text"> No growth hormones are used</p>
              </li>
            </ul>
            <button className="about-us__btn">
              Explore More
              <Arrow />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
