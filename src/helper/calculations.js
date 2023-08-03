export const calculateDiscountedPrice = (price, discountPer) => {
  return price - Math.trunc((price * discountPer) / 100);
};
