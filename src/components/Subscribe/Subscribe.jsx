import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <p className="subscribe__title">Subscribe to our Newsletter</p>
      <form className="subscribe__form">
        <input
          className="subscribe__input"
          placeholder="Your Email Address"
          type="text"
        />
        <button className="subscribe__btn">Subscribe</button>
      </form>
    </div>
  );
};

export default Subscribe;
