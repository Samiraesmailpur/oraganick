import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderNavigationItems from "./NavigationItems";
import { ReactComponent as Cross } from "@assets/svg/modal-cross.svg";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("menu__backdrop")) {
      toggleMenu();
    }
  };

  useEffect(() => {
    isOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "visible");
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="menu">
      <div className="menu__btn" onClick={toggleMenu}>
        <span className="menu__burger"></span>
        <span className="menu__burger"></span>
        <span className="menu__burger"></span>
      </div>
      <div
        className={`menu__backdrop ${isOpen ? "open" : ""}`}
        onClick={handleBackdropClick}
      >
        <div className="menu__content">
          <Cross className="menu__cross-icon" onClick={toggleMenu} />
          <HeaderNavigationItems />
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
