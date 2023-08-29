import Container from "@components/Container/Container";
import Spicy from "@assets/images/spicy.jpg";
import Nuts from "@assets/images/offer-nuts.jpg";
import Granate from "@assets/images/granate.jpg";
import Ginger from "@assets/images/ginger.jpg";
import "./AboutOffer.scss";

const AboutOffer = () => {
  const data = [
    {
      image: Spicy,
      title: "Spicy",
    },
    {
      image: Nuts,
      title: "Nuts & Feesd",
    },
    {
      image: Granate,
      title: "Fruits",
    },
    {
      image: Ginger,
      title: "Vegetable",
    },
  ];

  return (
    <section className="about-offer">
      <Container>
        <p className="about-offer__pre-title">About Us</p>
        <h3 className="about-offer__title">What We Offer for You</h3>
        <ul className="about-offer__list">
          {data.map((item, index) => (
            <li className="about-offer__item" key={index}>
              <img
                className="about-offer__image"
                src={item.image}
                alt={item.title}
              />
              <p className="about-offer__heading">{item.title}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default AboutOffer;
