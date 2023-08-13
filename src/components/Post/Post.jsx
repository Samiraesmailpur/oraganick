import "./Post.scss";
import { ReactComponent as Avatar } from "@assets/svg/avatar.svg";
import { ReactComponent as Arrow } from "@assets/svg/arrow.svg";

const Post = ({ postsData }) => {
  return (
    <div className="blog__post">
      <div className="blog__date">
        <p className="blog__day">25</p>
        <p className="blog__month">Nov</p>
      </div>
      <img className="blog__image" src={postsData.image} alt={postsData.alt} />
      <div className="blog__post-content">
        <div className="blog__author-container">
          <Avatar className="blog__avatar" />
          <span className="blog__author">By Rachi Card</span>
        </div>
        <p className="blog__post-title">{postsData.title}</p>
        <p className="blog__post-description">
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum
        </p>
        <button className="blog__read-more" type="button">
          Read More
          <Arrow className="blog__arrow" />
        </button>
      </div>
    </div>
  );
};

export default Post;
