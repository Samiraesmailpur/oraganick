import "./ProductsDetails.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
import { getProductsById } from "../../redux/products/operations";
import { ReactComponent as Arrow } from "@assets/svg/arrow.svg";
import { ReactComponent as Cross } from "@assets/svg/modal-cross.svg";
import useProductQuantity from "../../hooks/useProductQuantity";

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
  closeModal,
}) => {
  const dispatch = useDispatch();
  const { quantity, handleQuantityChange } = useProductQuantity(1);
  const [activeDescription, setActiveDescription] =
    useState("productDescription");

  const handleDescriptionChange = (description) => {
    setActiveDescription(description);
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
      <button onClick={closeModal} className="details__cross">
        <Cross />
      </button>
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
              onClick={() => handleAddToCart({ name, price, description })}
              className="details__btn"
            >
              Add To Cart
              <Arrow className="details__arrow" />
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
