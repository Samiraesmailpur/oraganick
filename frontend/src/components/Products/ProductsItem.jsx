import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import Modal from "../Modal/Modal";
import { starsRating } from "@helpers/starsRating";

const ProductsItem = ({
  products: {
    _id,
    category,
    name,
    image,
    price,
    discount,
    rating,
    description,
    productDescription,
    additionalInfo,
  },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const stars = starsRating(rating);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    isModalOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "visible");
  }, [isModalOpen]);

  return (
    <>
      <li onClick={openModal} className="products__item">
        <div className="products__box-category">
          <span className="products__category">{category}</span>
        </div>
        <img className="products__image" src={image} alt={name} />
        <div className="products__content">
          <p className="products__name">{name}</p>
          <div className="products__price-box">
            {discount ? (
              <div>
                <span className="products__old-price"> ${price}.00</span>
                <span className="products__price">${discount}.00</span>
              </div>
            ) : (
              <span className="products__price"> ${price}.00</span>
            )}
            <div>{stars}</div>
          </div>
        </div>
        {isModalOpen}
      </li>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <ProductDetails
            id={_id}
            image={image}
            name={name}
            category={category}
            price={price}
            discount={discount}
            rating={stars}
            description={description}
            productDescription={productDescription}
            additionalInfo={additionalInfo}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </>
  );
};

export default ProductsItem;
