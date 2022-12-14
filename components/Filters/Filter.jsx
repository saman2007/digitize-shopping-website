import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../../store/Filters";

const Filter = ({ text }) => {
  const currentSort = useSelector((store) => store.filters.productsSortFilter);
  const dispatch = useDispatch();

  return (
    <div
      className="mr-[10px] sm:mb-0 mb-[10px] relative p-[5px] cursor-pointer"
      onClick={() => {
        dispatch(
          filtersActions.changeFilter({
            datas: text,
            type: "productsSortFilter",
          })
        );
      }}
    >
      <span
        className={`absolute ${
          currentSort === text ? "opacity-100" : "opacity-0"
        } top-0 left-0 w-[5px] h-[5px] transition-all duration-300 rounded-full bg-orange-600`}
      ></span>

      <p
        className={`${
          currentSort === text ? "text-slate-800" : "text-gray-300"
        } sm:text-[16px] text-[20px] font-yekan-bl font-bold transition-all duration-300 whitespace-nowrap`}
      >
        {text}
      </p>
    </div>
  );
};

export default Filter;
