import { useState } from "react";
import Cart from "../components/Cart/Cart";
import SuccessfulOrder from "../components/SuccessfulOrder/SuccessfulOrder";

const CartPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    setIsSubmitted(true);
    resetForm();
  };

  return (
    <>
      {isSubmitted ? (
        <SuccessfulOrder />
      ) : (
        <Cart
          handleOpenForm={handleOpenForm}
          isFormOpen={isFormOpen}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default CartPage;
