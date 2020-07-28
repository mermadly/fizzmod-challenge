const handleDiscount = (listPrice, sellingPrice) => {
  const pricePercentage = (sellingPrice * 100) / listPrice;
  const discount = Math.floor(100 - pricePercentage);
  return discount;
};

export default handleDiscount;
