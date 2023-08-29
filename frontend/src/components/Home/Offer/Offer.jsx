import { useEffect, useState } from "react";
import { instance } from "@redux/products/operations";
import Container from "@components/Container/Container";
import ProductsItem from "../../Products/ProductsItem";
import Loader from "../../Loader/Loader";
import "./Offer.scss";

const Offer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getRecommendedProducts() {
      try {
        setIsLoading(true);
        const response = await instance.get("api/recommended");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getRecommendedProducts();
  }, []);

  return (
    <section className="offer">
      <Container>
        <p className="offer__pre-title">Offer</p>
        <h3 className="offer__title">We Offer Organic For You</h3>
        {isLoading ? (
          <Loader />
        ) : (
          <ul className="products__list">
            {products.map((item) => (
              <ProductsItem key={item._id} products={item} />
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
};

export default Offer;
