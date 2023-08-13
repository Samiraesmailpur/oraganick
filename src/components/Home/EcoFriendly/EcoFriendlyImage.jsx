import React from "react";
import ecoImage from "@assets/images/ecoImage.jpg";

const EcoFriendlyImage = () => {
  return (
    <div className="eco-friendly__box-image">
      <img className="eco-friendly__image" src={ecoImage} alt="field" />
    </div>
  );
};

export default EcoFriendlyImage;
