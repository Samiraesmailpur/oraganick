import Leaf from "@assets/images/leaf.png";
import Security from "@assets/images/security.png";
import Phone from "@assets/images/phone.png";
import Cart from "@assets/images/cart.png";

const AdvantagesItem = () => {
  const data = [
    {
      image: Cart,
      title: "Return Policy",
    },
    {
      image: Leaf,
      title: "100% Fresh",
    },
    {
      image: Phone,
      title: "Support 24/7",
    },
    {
      image: Security,
      title: "Secured Payment",
    },
  ];

  return (
    <ul className="advantages-card">
      {data.map((item, index) => (
        <li className="advantages-card__item" key={index}>
          <div className="advantages-card__image-box">
            <img
              className="advantages-card__image"
              src={item.image}
              alt={item.title}
            />
          </div>
          <p className="advantages-card__title">{item.title}</p>
          <p className="advantages-card__desc">
            Simply dummy text of the printintypesetting industry.
          </p>
        </li>
      ))}
    </ul>
  );
};

export default AdvantagesItem;
