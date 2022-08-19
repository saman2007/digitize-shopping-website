const ProductPrice = ({ price }) => {
  return (
    <div className="w-full overflow-hidden">
      <p className="text-orange-700 text-[19px] text-ellipsis whitespace-nowrap overflow-hidden">{`${
        "تومان" + "\u200E" + "   " + price
      }`}</p>
    </div>
  );
};

export default ProductPrice;
