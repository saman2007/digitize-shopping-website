import { useSelector } from "react-redux";
import Title from "../Title";
import Product from "./Product";

const ProductsFilter = ({ datas }) => {
  const kinds = useSelector((store) => store.filters.allAvailableKinds);
  return (
    <div className="mb-[35px]">
      <Title text={datas.title} />
      {kinds.map((value, index) => (
        <Product name={value} key={index} icon={datas.datas?.find((data) => data.text === value)?.icon} />
      ))}
    </div>
  );
};

export default ProductsFilter;
