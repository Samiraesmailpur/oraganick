import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@redux/products/operations";
import {
  selectProducts,
  selectIsLoading,
  selectTotalProducts,
} from "@redux/products/selectors";
import { clearItems } from "@redux/products/productsSlice";
import { ReactComponent as ArrowIcon } from "@assets/svg/arrow.svg";
import Container from "@components/Container/Container";
import Loader from "../Loader/Loader";
import ProductsItem from "./ProductsItem";
import "./Products.scss";

const Products = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const totalProducts = useSelector(selectTotalProducts);

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(clearItems());
  }, [dispatch]);

  const incrementPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const hideAll = () => {
    dispatch(clearItems());
    setPage(1);
  };

  return (
    <section className="products">
      <p className="products__pre-title">Categories</p>
      <h3 className="products__title">Our Products</h3>
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
        {totalProducts !== products.length ? (
          <button onClick={incrementPage} className="products__btn">
            Load More
            <ArrowIcon className="products__arrow" />
          </button>
        ) : (
          <button
            onClick={hideAll}
            className="products__btn products__btn-blue"
          >
            Hide All
            <ArrowIcon className="products__arrow" />
          </button>
        )}
      </Container>
    </section>
  );
};

export default Products;
