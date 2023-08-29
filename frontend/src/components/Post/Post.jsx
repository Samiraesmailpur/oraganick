import "./Post.scss";
import { ReactComponent as Avatar } from "@assets/svg/avatar.svg";
import { ReactComponent as Arrow } from "@assets/svg/arrow.svg";

const Post = ({ postsData }) => {
  return (
    <div className="post__item">
      <div className="post__date">
        <p className="post__day">25</p>
        <p className="post__month">Nov</p>
      </div>
      <img className="post__image" src={postsData.image} alt={postsData.alt} />
      <div className="post__post-content">
        <div className="post__author-container">
          <Avatar className="post__avatar" />
          <span className="post__author">By Rachi Card</span>
        </div>
        <p className="post__post-title">{postsData.title}</p>
        <p className="post__post-description">
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum
        </p>
        <button className="post__read-more" type="button">
          Read More
          <Arrow className="post__arrow" />
        </button>
      </div>
    </div>
  );
};

export default Post;
