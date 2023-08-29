import { ReactComponent as LeavesTop } from "@assets/svg/leavesTop.svg";
import { ReactComponent as Arrow } from "@assets/svg/arrow.svg";
import { ReactComponent as Garlic } from "@assets/svg/garlic.svg";
import { ReactComponent as LeavesRight } from "@assets/svg/leavesRight.svg";
import { ReactComponent as LeavesLeft } from "@assets/svg/leavesLeft.svg";
import Container from "@components/Container/Container";
import flowers from "@assets/images/flowers.png";
import notFound from "@assets/images/notFound.png";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <section className="not-found">
      <Container>
        <div className="not-found__box">
          <div className="not-found__box-image">
            <Garlic className="not-found__icon" />
            <LeavesTop className="not-found__icon" />
            <LeavesRight className="not-found__icon" />
            <LeavesLeft className="not-found__icon" />
            <img
              className="not-found__flowers-image"
              src={flowers}
              alt="flowers"
            />
          </div>
          <div className="not-found__box-content">
            <img className="not-found__image" src={notFound} alt="404" />
            <h4 className="not-found__title">Page not found</h4>
            <p className="not-found__desc">
              The page you are looking for doesn't exist or has been moved
            </p>
            <div className="not-found__wrapper">
              <a href="/" className="not-found__link">
                Go to Homepage
                <Arrow className="not-found__arrow" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
