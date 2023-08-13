import React from "react";

const EcoFriendlyContentBlock = ({ headline, desc }) => {
  return (
    <div className="eco-friendly__block">
      <p className="eco-friendly__headline">{headline}</p>
      <p className="eco-friendly__desc">{desc}</p>
    </div>
  );
};

export default EcoFriendlyContentBlock;
