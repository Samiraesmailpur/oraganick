import ProductsItem from "./ProductsItem";
import "./Products.scss";

const Products = ({ items }) => {
  return (
    <ul className="products-list">
      {items.map((item) => (
        <ProductsItem key={item._id} products={item} />
      ))}
    </ul>
  );
};

export default Products;
