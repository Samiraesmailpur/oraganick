import infoCardFruits from "@assets/images/infoCardFruits.png";
import infoCardVegatables from "@assets/images/infoCardVegatables.jpg";
import Container from "@components/Container/Container";
import "./InfoCards.scss";

const InfoCards = () => {
  return (
    <section className="info">
      <Container>
        <div className="info__box">
          <div className="info__box-img">
            <img className="info__img" src={infoCardFruits} alt="Fruits" />
            <div className="info__box-content">
              <p className="info__text">Natural!!</p>
              <p className="info__desc">Get Garden Fresh Fruits</p>
            </div>
          </div>
          <div className="info__box-img">
            <img
              className="info__img"
              src={infoCardVegatables}
              alt="Vegatables"
            />
            <div className="info__box-content">
              <p className="info__text info__text_color_green">Offer!!</p>
              <p className="info__desc info__desc_color_blue">
                Get 10% off on Vegetables
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default InfoCards;
