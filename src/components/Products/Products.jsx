import "./Products.scss";
import ProductsItem from "./ProductsItem";
import Container from "@components/Container/Container";
import { ReactComponent as Arrow } from "@assets/svg/arrow.svg";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/operations";
import { selectProducts } from "../../redux/selectors";

const Products = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  const itemsPerPage = 8;
  const totalVisibleProducts = itemsPerPage * page;
  const visibleProducts = products
    .slice(0, totalVisibleProducts)
    .sort((a, b) => {
      if (a.discount && !b.discount) {
        return -1;
      } else if (!a.discount && b.discount) {
        return 1;
      }
      return 0;
    });

  const incrementPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const decrementPage = () => {
    setPage(1);
  };

  return (
    <section className="products">
      <p className="products__pre-title">Categories</p>
      <h3 className="products__title">Our Products</h3>
      <Container>
        <ul className="products__list">
          {visibleProducts.map(
            ({ _id, category, name, image, price, discount }) => (
              <ProductsItem
                key={_id}
                category={category}
                name={name}
                image={image}
                price={price}
                discount={discount}
              />
            )
          )}
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
