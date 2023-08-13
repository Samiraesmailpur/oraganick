import { ReactComponent as Arrow } from "@assets/svg/arrow.svg";
import tomatoes from "@assets/images/tomatoes.png";
import salad from "@assets/images/salad.png";
import { ReactComponent as Avatar } from "@assets/svg/avatar.svg";

const NewsPost = () => {
  return (
    <div className="news__block">
      <div className="news__post">
        <div className="news__date">
          <p className="news__day">25</p>
          <p className="news__month">Nov</p>
        </div>
        <img className="news__image" src={salad} alt="salad" />
        <div className="news__post-content">
          <div className="news__author-container">
            <Avatar className="news__avatar" />
            <span className="news__author">By Rachi Card</span>
          </div>
          <p className="news__post-title">
            The Benefits of Vitamin D & How to Get It
          </p>
          <p className="news__post-description">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum
          </p>
          <button className="news__read-more" type="button">
            Read More
            <Arrow className="news__arrow" />
          </button>
        </div>
      </div>
      <div className="news__post">
        <div className="news__date">
          <p className="news__day">25</p>
          <p className="news__month">Nov</p>
        </div>
        <img className="news__image" src={tomatoes} alt="tomatoes" />
        <div className="news__post-content">
          <div className="news__author-container">
            <Avatar className="news__avatar" />
            <span className="news__author">By Rachi Card</span>
          </div>
          <p className="news__post-title">Our Favourite Summertime Tomatoes</p>
          <p className="news__post-description">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum
          </p>
          <button className="news__read-more" type="button">
            Read More
            <Arrow className="news__arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsPost;
