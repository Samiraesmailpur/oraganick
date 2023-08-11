import juice from "@assets/images/juice.jpg";
import food from "@assets/images/food.jpg";
import nuts from "@assets/images/nuts.jpg";

const Cards = () => {
  return (
    <div>
      <img src={juice} alt="juice" />
      <div>
        <p>Organic Juice</p>
      </div>
      <img src={food} alt="food" />
      <div>
        <p>Organic Food</p>
      </div>
      <img src={nuts} alt="nuts" />
      <div>
        <p>Nuts Cookis</p>
      </div>
    </div>
  );
};

export default Cards;
