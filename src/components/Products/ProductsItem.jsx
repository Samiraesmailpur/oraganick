import { ReactComponent as Stars } from "@assets/svg/starsTestimonial.svg";

const ProductsItem = ({ category, name, image, price, discount }) => {
  return (
    <li className="products__item">
      <div className="products__box-category">
        <span className="products__category">{category}</span>
      </div>
      <img className="products__image" src={image} alt={name} />
      <div className="products__content">
        <p className="products__name">{name}</p>
        <div className="products__price-box">
          <p className="products__price">
            {discount ? (
              <span className="products__discount">${discount}.00</span>
            ) : (
              ""
            )}
            ${price}.00
          </p>
          <div>
            <Stars className="products__stars" />
            <Stars className="products__stars" />
            <Stars className="products__stars" />
            <Stars className="products__stars" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductsItem;
