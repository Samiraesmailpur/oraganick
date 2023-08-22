import "./Cart.scss";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { selectCartProducts } from "../../redux/cart/selectors";
import Container from "@components/Container/Container";
import { ReactComponent as Arrow } from "@assets/svg/arrow.svg";
import { getTotalPrice, getDiscountPrice } from "../../utils/getPrice";
import OrderForm from "../Form/Form";

const Cart = ({ handleOpenForm, isFormOpen, handleSubmit }) => {
  const cartItems = useSelector(selectCartProducts);

  return (
    <section className="cart">
      <div className="cart__bg">Cart</div>
      {cartItems.length > 0 && (
        <div className="cart__box">
          <Container>
            <CartItem orderProducts={cartItems} />
            <div className="cart__cost-box">
              <p className="cart__cost">
                Total Cost: {getTotalPrice(cartItems)}$
              </p>
              <p>Discount: {getDiscountPrice(cartItems)}$</p>
            </div>
            {isFormOpen ? (
              <OrderForm handleFormSubmit={handleSubmit} />
            ) : (
              <button onClick={handleOpenForm} className="cart__btn">
                To order
                <Arrow className="cart__arrow" />
              </button>
            )}
          </Container>
        </div>
      )}
    </section>
  );
};

export default Cart;
