import "./Gallery.scss";
import Container from "@components/Container/Container";
import juice from "@assets/images/juice.jpg";
import food from "@assets/images/food.jpg";
import nuts from "@assets/images/nuts.jpg";

const Gallery = () => {
  return (
    <section className="gallery">
      <Container>
        <div className="gallery__box">
          <div className="gallery__block">
            <img className="gallery__image" src={juice} alt="juice" />
            <p className="gallery__name">Organic Juice</p>
          </div>
          <div className="gallery__block">
            <img className="gallery__image" src={food} alt="food" />
            <p className="gallery__name">Organic Food</p>
          </div>
          <div className="gallery__block">
            <img className="gallery__image" src={nuts} alt="nuts" />
            <p className="gallery__name">Nuts Cookis</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
