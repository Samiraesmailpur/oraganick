import "./EcoFriendly.scss";
import EcoFriendlyImage from "./EcoFriendlyImage";
import EcoFriendlyContentBlock from "./EcoFriendlyContentBlock";

const EcoFriendly = () => {
  return (
    <section className="eco-friendly">
      <div className="eco-friendly__container">
        <div className="eco-friendly__box">
          <EcoFriendlyImage />
          <div className="eco-friendly__content">
            <p className="eco-friendly__pre-title">Eco Friendly</p>
            <h3 className="eco-friendly__title">
              Econis is a Friendly Organic Store
            </h3>
            <EcoFriendlyContentBlock
              headline="Start with Our Company First"
              desc="Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis."
            />
            <EcoFriendlyContentBlock
              headline="Learn How to Grow Yourself"
              desc="Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis."
            />
            <EcoFriendlyContentBlock
              headline="Farming Strategies of Today"
              desc="Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoFriendly;
