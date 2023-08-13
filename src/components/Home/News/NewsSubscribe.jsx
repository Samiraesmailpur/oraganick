const NewsSubscribe = () => {
  return (
    <div className="news__subscribe">
      <p className="news__subscribe-title">Subscribe to our Newsletter</p>
      <form className="news__subscribe-form">
        <input
          className="news__subscribe-input"
          placeholder="Your Email Address"
          type="text"
        />
        <button className="news__subscribe-btn">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsSubscribe;
