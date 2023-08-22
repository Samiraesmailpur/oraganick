import "./Products.scss";
import ProductsItem from "./ProductsItem";
import Container from "@components/Container/Container";
import Loader from "../Loader/Loader";
import { ReactComponent as Arrow } from "@assets/svg/arrow.svg";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/products/operations";
import {
  selectProducts,
  selectIsLoadind,
} from "../../redux/products/selectors";

const Products = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isLoadind = useSelector(selectIsLoadind);

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  const itemsPerPage = 8;
  const totalVisibleProducts = itemsPerPage * page;
  const visibleProducts = products.slice(0, totalVisibleProducts);

  const incrementPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const decrementPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <section className="products">
      <p className="products__pre-title">Categories</p>
      <h3 className="products__title">Our Products</h3>
      <Container>
        {isLoadind && <Loader />}
        <ul className="products__list">
          {visibleProducts.map((item) => (
            <ProductsItem key={item._id} products={item} />
          ))}
        </ul>
        {page === 1 ? (
          <button onClick={incrementPage} className="products__btn">
            Load More
            <Arrow className="products__arrow" />
          </button>
        ) : (
          <button
            onClick={decrementPage}
            className="products__btn products__btn-blue"
          >
            Hide All
            <Arrow className="products__arrow" />
          </button>
        )}
      </Container>
    </section>
  );
};

export default Products;
