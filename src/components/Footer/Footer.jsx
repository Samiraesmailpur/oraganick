import { ReactComponent as Logo } from "@assets/svg/logo.svg";
import { ReactComponent as Facebook } from "@assets/svg/facebook.svg";
import { ReactComponent as Instagram } from "@assets/svg/instagram.svg";
import { ReactComponent as Twitter } from "@assets/svg/twitter.svg";
import { ReactComponent as Pinterest } from "@assets/svg/pinterest.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>Contact Us</div>
        <ul>
          <li>
            <p>Email:</p>
            <a href="mailto:needhelp@Organia.com">needhelp@Organia.com</a>
          </li>
          <li>
            <p>Phone:</p> <a href="tel:666888888">666 888 888</a>
          </li>
          <li>
            <p>Address:</p>
            <a href="https://goo.gl/maps/tHp81woKa9Vo969f9">
              88 road, borklyn street, USA
            </a>
          </li>
        </ul>
        <div>
          <a href="/">
            <Logo />
            Organick
          </a>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing{" "}
          </p>
          <ul>
            <li>
              <a href="https://uk-ua.facebook.com/">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="https://ru.pinterest.com/#top">
                <Pinterest />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p>Utility Pages</p>
          <ul>
            <li>
              <a href="">Style Guide</a>
            </li>
            <li>
              <a href="">404 Not Found</a>
            </li>
            <li>
              <a href="">Password Protected</a>
            </li>
            <li>
              <a href="">Licences</a>
            </li>
            <li>
              <a href="">Changelog</a>
            </li>
          </ul>
        </div>
        <div>
          Copyright © <span>Organick</span> | Designed by
          <span>VictorFlow</span> Templates - Powered by <span>Webflow</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
