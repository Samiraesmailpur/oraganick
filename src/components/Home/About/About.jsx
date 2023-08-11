import fruits from "@assets/images/fruits.png";
import { ReactComponent as Arrow } from "@assets/svg/arrow.svg";
import { ReactComponent as Mailbox } from "@assets/svg/mailbox.svg";

const About = () => {
  return (
    <div>
      <div>
        <img src={fruits} alt="fruits" />
      </div>
      <div>
        <p>About Us</p>
        <h2>We Believe in Working Accredited Farmers</h2>
        <p>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <div>
          <div>
            <div></div>
          </div>
          <div>
            <p>Organic Foods Only</p>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
          </div>
        </div>
        <div>
          <div>
            <div></div>
            <Mailbox />
          </div>
          <div>
            <p>Quality Standards</p>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
          </div>
        </div>
        <button type="button" className="shop-button">
          Shop Now <Arrow />
        </button>
      </div>
    </div>
  );
};

export default About;
