import "./Cart.scss";
import { useSelector } from "react-redux";
import Container from "@components/Container/Container";
import { ReactComponent as Cross } from "@assets/svg/modal-cross.svg";
import { ReactComponent as Arrow } from "@assets/svg/arrow.svg";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <section className="cart">
      <div className="cart__bg">Cart</div>
      <div className="cart__box">
        <Container>
          <ul className="cart__list">
            {cartItems.map(({ id, name, image, price, discount, quantity }) => (
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
                  <input className="cart__input" pattern="\d*" type="text" />
                  <button className="cart__cross">
                    <Cross />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart__cost-box">
            <p className="cart__cost">Total Cost: $</p>
            <p>Discount: $</p>
          </div>
          <button className="cart__btn">
            To order
            <Arrow className="cart__arrow" />
          </button>
        </Container>
      </div>
    </section>
  );
};

export default Cart;
