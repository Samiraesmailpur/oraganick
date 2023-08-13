import "./News.scss";
import Container from "@components/Container/Container";
import Post from "../../Post/Post";
import Subscribe from "../../Subscribe/Subscribe";
import { ReactComponent as Arrow } from "@assets/svg/arrow.svg";
import tomatoes from "@assets/images/tomatoes.png";
import salad from "@assets/images/salad.png";

const News = () => {
  const postsData = [
    {
      id: 1,
      image: tomatoes,
      title: "The Benefits of Vitamin D & How to Get It",
    },
    {
      id: 2,
      image: salad,
      title: "Our Favourite Summertime Tomatoes",
    },
  ];

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
        <div className="blog">
          {postsData.map((post) => (
            <Post key={post.id} postsData={post} />
          ))}
        </div>
        <Subscribe />
      </Container>
    </section>
  );
};

export default News;
