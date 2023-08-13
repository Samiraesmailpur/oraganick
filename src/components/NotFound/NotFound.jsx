import "./NotFound.scss";
import flowers from "../../assets/images/flowers.png";
import notFound from "../../assets/svg/notFound.svg";
import { ReactComponent as LeavesTop } from "@assets/svg/leavesTop.svg";
import { ReactComponent as Arrow } from "@assets/svg/arrow.svg";
import { ReactComponent as Garlic } from "@assets/svg/garlic.svg";
import { ReactComponent as LeavesRight } from "@assets/svg/leavesRight.svg";
import { ReactComponent as LeavesLeft } from "@assets/svg/leavesLeft.svg";

const NotFound = () => {
  return (
    <section className="notFound">
      <div className="notFound__box">
        <div className="notFound__box-image">
          <Garlic className="notFound__icon" />
          <LeavesTop className="notFound__icon" />
          <LeavesRight className="notFound__icon" />
          <LeavesLeft className="notFound__icon" />
          <img src={flowers} alt="flowers" />
        </div>
        <div className="notFound__box-content">
          <img src={notFound} alt="404" />
          <h4 className="notFound__title">Page not found</h4>
          <p className="notFound__desc">
            The page you are looking for doesn't exist or has been moved
          </p>
          <div className="notFound__wrapper">
            <a href="/" className="notFound__link">
              Go to Homepage
              <Arrow className="notFound__arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
