import "./Footer.scss";
import { NavLink } from "react-router-dom";
import Container from "@components/Container/Container";
import Logo from "../Logo/Logo";
import { ReactComponent as Facebook } from "@assets/svg/facebook.svg";
import { ReactComponent as Instagram } from "@assets/svg/instagram.svg";
import { ReactComponent as Twitter } from "@assets/svg/twitter.svg";
import { ReactComponent as Pinterest } from "@assets/svg/pinterest.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__box">
          <div className="footer__contact">
            <h4 className="footer__title">Contact Us</h4>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <p className="footer__contact-subtitle">Email:</p>
                <a
                  className="footer__contact-link"
                  href="mailto:needhelp@Organia.com"
                >
                  needhelp@Organia.com
                </a>
              </li>
              <li className="footer__contact-item">
                <p className="footer__contact-subtitle">Phone:</p>
                <a className="footer__contact-link" href="tel:666888888">
                  666 888 888
                </a>
              </li>
              <li className="footer__contact-item">
                <p className="footer__contact-subtitle">Address:</p>
                <a
                  className="footer__contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://goo.gl/maps/tHp81woKa9Vo969f9"
                >
                  88 road, borklyn street, USA
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__logo">
            <Logo />
            <p className="footer__desc">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing
            </p>
            <ul className="footer__social-list">
              <li className="footer__social-item">
                <a
                  className="footer__social-link"
                  href="https://uk-ua.facebook.com/"
                >
                  <Facebook />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  className="footer__social-link"
                  href="https://www.instagram.com/"
                >
                  <Instagram />
                </a>
              </li>
              <li className="footer__social-item">
                <a className="footer__social-link" href="https://twitter.com/">
                  <Twitter />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  className="footer__social-link"
                  href="https://ru.pinterest.com/#top"
                >
                  <Pinterest />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__utility">
            <h4 className="footer__title">Utility Pages</h4>
            <ul className="footer__utility-list">
              <li className="footer__utility-item">
                <NavLink className="footer__utility-link" to="/style-guide">
                  Style Guide
                </NavLink>
              </li>
              <li className="footer__utility-item">
                <NavLink className="footer__utility-link" to="/404">
                  404 Not Found
                </NavLink>
              </li>
              <li className="footer__utility-item">
                <NavLink
                  className="footer__utility-link"
                  to="/password-protected"
                >
                  Password Protected
                </NavLink>
              </li>
              <li className="footer__utility-item">
                <NavLink className="footer__utility-link" to="/licenses">
                  Licences
                </NavLink>
              </li>
              <li className="footer__utility-item">
                <NavLink className="footer__utility-link" to="/changelog">
                  Changelog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__copyright">
          Copyright © <b>Organick</b> | Designed by
          <b> VictorFlow</b> Templates - Powered by <b>Webflow</b>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
