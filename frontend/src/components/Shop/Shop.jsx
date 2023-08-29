import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectShopProducts, selectIsLoading } from "@redux/shop/selectors";
import { getShopProducts } from "../../redux/shop/operations";
import Container from "@components/Container/Container";
import Loader from "../Loader/Loader";
import ProductsItem from "components/Products/ProductsItem";
import "./Shop.scss";
import "../Products/Products.scss";

const Shop = () => {
  const products = useSelector(selectShopProducts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShopProducts());
  }, [dispatch]);

  return (
    <section className="shop">
      <div className="shop__bg">Shop</div>
      <Container>
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

export default Shop;
