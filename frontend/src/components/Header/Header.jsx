import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartProducts } from "@redux/cart/selectors";
import "./Header.scss";
import Container from "@components/Container/Container";
import NavigationItems from "./NavigationItems/NavigationItems";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Logo from "../Logo/Logo";
import { ReactComponent as Cart } from "@assets/svg/cart.svg";
import { ReactComponent as Search } from "@assets/svg/search.svg";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const cartItems = useSelector(selectCartProducts);
  const totalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  const isDesctopScreen = useMediaQuery("(min-width:1200px)");

  return (
    <header className="header">
      <Container>
        <nav className="nav">
          {!isDesctopScreen && <BurgerMenu />}
          <Logo />
          {isDesctopScreen && <NavigationItems />}
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
              <p className="nav__amount">Cart ({totalQuantity})</p>
              {totalQuantity > 0 && (
                <p className="nav__amount-mobile">{totalQuantity}</p>
              )}
            </NavLink>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
