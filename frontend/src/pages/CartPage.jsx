import { useState } from "react";
import Cart from "../components/Cart/Cart";
import SuccessfulOrder from "../components/SuccessfulOrder/SuccessfulOrder";
import { useDispatch } from "react-redux";
import { addOrder } from "../redux/cart/operations";

const CartPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleSubmit = (values, { resetForm }) => {
    setIsSubmitted(true);
    dispatch(addOrder(values));
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
