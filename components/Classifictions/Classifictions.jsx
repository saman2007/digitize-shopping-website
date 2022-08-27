import Filters from "./Filters/Filters";
import ProductsFilter from "./ProductsFilter/ProductsFilter";

const Classifictions = ({ classifictions }) => {
  return (
    <div className="block w-full rounded-[12px] bg-stone-50 h-fit p-[10px]">
      {classifictions.map((data, index) => {
        if (data.type === "products")
          return <ProductsFilter key={index} datas={data} />;

        if (data.type === "filtersDropDowns")
          return <Filters datas={data} key={index} />;
      })}
    </div>
  );
};

export default Classifictions;
