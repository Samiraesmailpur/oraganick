import { NavLink } from "react-router-dom";
import Container from "@components/Container/Container";
import "./Header.scss";
import { ReactComponent as Logo } from "@assets/svg/logo.svg";
import { ReactComponent as Cart } from "@assets/svg/cart.svg";
import { ReactComponent as Search } from "@assets/svg/search.svg";
import { ReactComponent as Arrow } from "@assets/svg/headerArrow.svg";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <nav className="nav">
          <a className="nav__logo-link" href="/">
            <Logo className="nav__logo-icon" />
            <span className="nav__logo-name">Organick</span>
          </a>
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
              <NavLink className="nav__link" to="news">
                News
              </NavLink>
            </li>
          </ul>
          <div className="nav__box">
            <form className="nav__form">
              <input type="text" className="nav__input" />
              <button className="nav__btn">
                <Search />
              </button>
            </form>
            <div className="nav__box-cart">
              <div className="nav__bg-cart">
                <Cart />
              </div>
              <p className="nav__amount">Cart (0)</p>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;