import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../../../store/Filters";
import * as classifictionsIcons from "../../icons/ClassifictionsIcons";

const Product = ({ name, icon }) => {
  const { [icon]: Icon } = classifictionsIcons;
  const productsFilters = useSelector((store) => store.filters.productsFilters);
  const dispatch = useDispatch();

  return (
    <div
      className={`flex transition-all duration-[250ms] flex-row-reverse items-center cursor-pointer mb-[15px] text-slate-800 w-fit ${
        productsFilters.includes(name) ? "" : "opacity-50"
      }`}
      onClick={() => {
        //if products filter doesnt include a product, add the product to that
        if (!productsFilters.includes(name))
          dispatch(
            filtersActions.addFilter({ data: name, type: "productsFilters" })
          );
        //if products filter has length of 1, dont remove anything
        else if (productsFilters.length !== 1)
          dispatch(
            filtersActions.deleteFilter({
              data: name,
              type: "productsFilters",
            })
          );
      }}
    >
      <p className={`text-[16px] mr-[5px]`}>{name}</p>
      <Icon className="w-[25px] h-[25px]" />
    </div>
  );
};

export default Product;
