import { Link } from "react-router-dom";
import "./Logo.scss";
import { ReactComponent as OrganickLogo } from "@assets/svg/logo.svg";

const Logo = () => {
  return (
    <Link className="logo" to="/">
      <OrganickLogo className="logo__icon" />
      <span className="logo__name">Organick</span>
    </Link>
  );
};

export default Logo;
