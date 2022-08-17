import Title from "../Title";
import Product from "./Product";

const ProductsFilter = ({ datas }) => {
  return (
    <div className="mb-[35px]">
      <Title text={datas.title} />
      {datas.datas.map((value, index) => (
        <Product name={value.text} key={index} icon={value.icon} />
      ))}
    </div>
  );
};

export default ProductsFilter;
