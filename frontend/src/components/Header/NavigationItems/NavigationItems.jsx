import { NavLink } from "react-router-dom";
import { ReactComponent as Arrow } from "@assets/svg/headerArrow.svg";

const NavigationItems = () => {
  return (
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink className="nav__link" to="/">
          Home
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" to="/about">
          About
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" to="/pages">
          Pages
          <Arrow className="nav__arrow" />
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" to="/shop">
          Shop
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" to="/projects">
          Projects
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" to="/news">
          News
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationItems;
