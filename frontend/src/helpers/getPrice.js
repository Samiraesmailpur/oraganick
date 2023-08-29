export const getTotalPrice = (items) => {
  const totalPrice = items.reduce((accumulator, item) => {
    if (item.discount) {
      return accumulator + item.discount * item.quantity;
    } else {
      return accumulator + item.price * item.quantity;
    }
  }, 0);
  return totalPrice;
};

export const getDiscountPrice = (items) => {
  const discountPrice = items.reduce((acc, item) => {
    if (item.discount) {
      const dif = item.price - item.discount;
      return acc + dif * item.quantity;
    } else {
      return acc;
    }
  }, 0);

  return discountPrice;
};
