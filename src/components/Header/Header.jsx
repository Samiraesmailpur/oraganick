import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartProducts } from "../../redux/cart/selectors";
import "./Header.scss";
import Container from "@components/Container/Container";
import Logo from "../Logo/Logo";
import { ReactComponent as Cart } from "@assets/svg/cart.svg";
import { ReactComponent as Search } from "@assets/svg/search.svg";
import { ReactComponent as Arrow } from "@assets/svg/headerArrow.svg";

const Header = () => {
  const cartItems = useSelector(selectCartProducts);
  const totalItemsInCart = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <header className="header">
      <Container>
        <nav className="nav">
          <Logo />
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="nav__link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="about">
                About
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="pages">
                Pages
                <Arrow className="nav__arrow" />
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="shop">
                Shop
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="projects">
                Projects
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="blog">
                News
              </NavLink>
            </li>
          </ul>
          <div className="nav__box">
            <div className="nav__field">
              <input type="text" className="nav__input" />
              <button className="nav__btn">
                <Search />
              </button>
            </div>
            <NavLink to="/cart" className="nav__box-cart">
              <div className="nav__bg-cart">
                <Cart />
              </div>
              <p className="nav__amount">Cart ({totalItemsInCart})</p>
            </NavLink>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
