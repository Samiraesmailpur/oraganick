import { useState } from "react";

const useProductQuantity = (initialQuantity) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleQuantityChange = (newQuantity) => {
    if (!isNaN(newQuantity)) {
      setQuantity(newQuantity);
    }
  };

  return { quantity, handleQuantityChange };
};

export default useProductQuantity;
