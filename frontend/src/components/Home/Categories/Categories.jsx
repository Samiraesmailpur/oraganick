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
import Loader from "@components/Loader/Loader";
import Products from "../../Products/Products";
import "./Categories.scss";

const Categories = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const totalProducts = useSelector(selectTotalProducts);

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  // clear store before component unmount
  useEffect(() => {
    return () => {
      dispatch(clearItems());
    };
  }, [dispatch]);

  const incrementPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const decrementPage = () => {
    dispatch(clearItems());
    setPage(1);
  };

  return (
    <section className="categories">
      <p className="categories__pre-title">Categories</p>
      <h3 className="categories__title">Our Products</h3>
      <Container>
        {isLoading ? <Loader /> : <Products items={products} />}
        {totalProducts !== products.length ? (
          <button onClick={incrementPage} className="categories__btn">
            Load More
            <ArrowIcon className="categories__arrow" />
          </button>
        ) : (
          <button
            onClick={decrementPage}
            className="categories__btn categories__btn--blue"
          >
            Hide All
            <ArrowIcon className="categories__arrow" />
          </button>
        )}
      </Container>
    </section>
  );
};

export default Categories;
