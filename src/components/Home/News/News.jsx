import "./News.scss";
import NewsPost from "./NewsPost";
import Container from "@components/Container/Container";
import NewsSubscribe from "./NewsSubscribe";
import { ReactComponent as Arrow } from "@assets/svg/arrow.svg";

const News = () => {
  return (
    <section className="news">
      <Container>
        <div className="news__content-box">
          <div className="news__content-wrapper">
            <p className="news__pre-title">News</p>
            <h3 className="news__title">
              Discover weekly content about organic food, & more
            </h3>
          </div>
          <button className="news__btn" type="button">
            More News
            <Arrow className="news__arrow" />
          </button>
        </div>
        <NewsPost />
        <NewsSubscribe />
      </Container>
    </section>
  );
};

export default News;
