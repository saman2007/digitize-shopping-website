const AddToCart = ({ path, extraClasses }) => {
  return (
    <div className={`bg-orange-600 p-[5px] hover:bg-orange-700 text-center flex justify-center items-center cursor-pointer text-white w-full h-[50px] rounded-[5px] duration-300 transition-all ${extraClasses}`}>
      اضافه کردن به سبد خرید
    </div>
  );
};

export default AddToCart;
