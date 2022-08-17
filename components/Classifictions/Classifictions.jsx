import Filters from "./Filters/Filters";
import ProductsFilter from "./ProductsFilter/ProductsFilter";

const Classifictions = ({ classifictions }) => {
  return (
    <div
      className="w-full rounded-[12px] col-start-1 sm:col-start-8 col-end-9 row-start-2 row-end-3 sm:row-start-1 sm:row-end-[8] bg-stone-50 min-h-[100px] p-[10px]"
      dir="rtl"
    >
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
