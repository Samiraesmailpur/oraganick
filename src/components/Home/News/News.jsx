import salad from "@assets/images/salad.png";
import tomatoes from "@assets/images/tomatoes.png";
import { ReactComponent as Arrow } from "@assets/svg/arrow.svg";
import { ReactComponent as Avatar } from "@assets/svg/avatar.svg";

const News = () => {
  return (
    <div>
      <div>
        <p>News</p>
        <h3>Discover weekly content about organic food, & more</h3>
      </div>
      <button type="button">
        More News
        <Arrow />
      </button>
      <div>
        <img src={salad} alt="salad" />
        <div>
          <Avatar />
          <p>By Rachi Card</p>
          <p>The Benefits of Vitamin D & How to Get It</p>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum
          </p>
          <button type="button">
            Read More
            <Arrow />
          </button>
        </div>
        <img src={tomatoes} alt="tomatoes" />
        <div>
          <Avatar />
          <p>By Rachi Card</p>
          <p>Our Favourite Summertime Tommeto</p>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum
          </p>
          <button type="button">
            Read More
            <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
