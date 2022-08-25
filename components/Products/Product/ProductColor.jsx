const ProductColor = ({ isFirst, color }) => {
  color = `#${color}`;

  return (
    <div
      className={`${
        isFirst ? "" : "ml-[-5px]"
      } rounded-full w-[15px] h-[15px] border-white border-2 border-solid`}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default ProductColor;
