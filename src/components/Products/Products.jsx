import "./Products.scss";
import ProductsItem from "./ProductsItem";
import Container from "@components/Container/Container";

const Products = ({ products }) => {
  return (
    <section className="products">
      <p className="products__pre-title">Categories</p>
      <h3 className="products__title">Our Products</h3>
      <Container>
        <ul className="products__list">
          {products.map(({ _id, category, name, image, price, discount }) => (
            <ProductsItem
              key={_id}
              category={category}
              name={name}
              image={image}
              price={price}
              discount={discount}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Products;
