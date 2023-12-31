import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@redux/cart/cartSlice";
import { getProductsById } from "@redux/products/operations";
import { ReactComponent as ArrowIcon } from "@assets/svg/arrow.svg";

const ProductDetails = ({
  id,
  image,
  name,
  category,
  price,
  discount,
  rating,
  description,
  productDescription,
  additionalInfo,
}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [activeDescription, setActiveDescription] =
    useState("productDescription");
  const [isActive, setIsActive] = useState(false);

  const addActiveColor = () => {
    setIsActive(true);
  };

  const handleDescriptionChange = (description) => {
    setActiveDescription(description);
  };

  const handleQuantityChange = (quantity) => {
    if (!isNaN(quantity)) {
      setQuantity(quantity);
    }
  };

  const handleAddToCart = () => {
    if (quantity <= 0) {
      return;
    }
    const product = {
      id,
      image,
      name,
      discount,
      price,
      quantity,
    };
    dispatch(addToCart(product));
  };

  useEffect(() => {
    dispatch(getProductsById(id));
  }, [dispatch, id]);

  return (
    <div className="details">
      <div className="details__flex-container">
        <div className="details__image-box">
          <img className="details__image" src={image} alt={name} />
          <p className="details__category">{category}</p>
        </div>
        <div className="details__content-box">
          <p className="details__name">{name}</p>
          <div>{rating}</div>
          {discount ? (
            <div className="details__price-box">
              <span className="details__old-price"> ${price}.00</span>
              <span className="details__price">${discount}.00</span>
            </div>
          ) : (
            <span className="details__price"> ${price}.00</span>
          )}
          <p className="details__desc">{description}</p>
          <div className="details__quantity-box">
            <span className="details__quantity">Quantity :</span>
            <input
              type="text"
              pattern="\d*"
              onChange={(e) => handleQuantityChange(Number(e.target.value))}
              name="quantity"
              className="details__input"
              value={quantity}
            />
            <button
              onClick={() => {
                handleAddToCart();
                addActiveColor();
              }}
              className={
                (isActive
                  ? "details__btn details__btn--yellow"
                  : "details__btn") + (quantity < 1 ? " disabled" : "")
              }
            >
              Add To Cart
              <ArrowIcon className="details__arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className="details__desc-btn-box">
        <div
          className={
            activeDescription === "productDescription"
              ? "details__desc-btn details__desc-btn-active"
              : "details__desc-btn"
          }
          onClick={() => handleDescriptionChange("productDescription")}
        >
          Product Description
        </div>
        <div
          className={
            activeDescription === "additionalInfo"
              ? "details__desc-btn details__desc-btn-active"
              : "details__desc-btn"
          }
          onClick={() => handleDescriptionChange("additionalInfo")}
        >
          Additional Info
        </div>
      </div>
      <p className="details__info-text">
        {activeDescription === "productDescription"
          ? productDescription
          : additionalInfo}
      </p>
    </div>
  );
};

export default ProductDetails;
