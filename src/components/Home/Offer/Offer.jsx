import "./Offer.scss";
import { useSelector } from "react-redux";
import ProductsItem from "../../Products/ProductsItem";
import { selectProducts } from "../../../redux/products/selectors";
import Container from "@components/Container/Container";

const Offer = () => {
  const products = useSelector(selectProducts);
  const recommendedProducts = products.filter((item) => item.recommended);

  return (
    <section className="offer">
      <Container>
        <p className="offer__pre-title">Offer</p>
        <h3 className="offer__title">We Offer Organic For You</h3>
        <ul className="products__list">
          {recommendedProducts.map((item) => (
            <ProductsItem key={item._id} products={item} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Offer;
