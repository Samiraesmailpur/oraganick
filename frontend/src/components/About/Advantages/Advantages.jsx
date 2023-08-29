import Container from "@components/Container/Container";
import AdvantagesItem from "./AdvantagesItem";
import NaturalProducts from "@assets/images/naturalProducts.jpg";
import "./Advantages.scss";

const Advantages = () => {
  return (
    <section className="advantages">
      <Container>
        <div className="advantages__flex-container">
          <div className="advantages__content-box">
            <p className="advantages__pre-title">Why Choose us?</p>
            <h3 className="advantages__title">
              We do not buy from the open market & traders.
            </h3>
            <p className="advantages__desc">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard the 1500s, when an
              unknown
            </p>
            <ul className="advantages__list">
              <li className="advantages__item">
                <div className="advantages__heading">100% Natural Product</div>
                <p className="advantages__text">
                  Simply dummy text of the printing and typesetting industry
                  Lorem Ipsum
                </p>
              </li>
              <li className="advantages__item">
                <div className="advantages__heading">Increases resistance</div>
                <p className="advantages__text">
                  Simply dummy text of the printing and typesetting industry
                  Lorem Ipsum
                </p>
              </li>
            </ul>
          </div>
          <div className="advantages__image-box">
            <img
              className="advantages__image"
              src={NaturalProducts}
              alt="Natural Products"
            />
          </div>
        </div>
        <AdvantagesItem />
      </Container>
    </section>
  );
};

export default Advantages;
