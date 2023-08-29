import { ReactComponent as Cross } from "@assets/svg/modal-cross.svg";
import { deleteFromCart, updateQuantity } from "@redux/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ orderProducts }) => {
  const dispatch = useDispatch();

  const handleDeleteFromCart = (id) => {
    dispatch(deleteFromCart(id));
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    dispatch(updateQuantity({ id, newQuantity }));
  };

  return (
    <ul className="cart__list">
      {orderProducts.map(({ id, name, image, price, discount, quantity }) => (
        <li className="cart__item" key={id}>
          <div className="cart__product-box">
            <div className="cart__box-img">
              <img className="cart__img" src={image} alt={name} />
            </div>
            <span className="cart__name">{name}</span>
            {discount ? (
              <div>
                <span className="cart__price-old"> ${price}.00</span>
                <span className="cart__price">${discount}.00</span>
              </div>
            ) : (
              <span className="cart__price"> ${price}.00</span>
            )}
          </div>
          <div className="cart__quantity-box">
            <span className="cart__quantity">Quantity :</span>
            <input
              className="cart__input"
              pattern="\d*"
              type="text"
              name="quantity"
              onChange={(e) => handleUpdateQuantity(id, Number(e.target.value))}
              defaultValue={quantity}
            />
            <button
              onClick={() => handleDeleteFromCart(id)}
              className="cart__cross"
            >
              <Cross />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartItem;
