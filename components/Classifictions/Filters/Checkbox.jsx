import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../../../store/Filters";

const Checkbox = ({ name }) => {
  const brandsFilters = useSelector((store) => store.filters.brandsFilter);
  const dispatch = useDispatch();
  const isIncludes = brandsFilters.includes(name);

  return (
    <>
      <div
        className="absolute left-0 right-0 h-full w-full"
        onClick={() => {
          if (!isIncludes)
            dispatch(
              filtersActions.addFilter({ data: name, type: "brandsFilter" })
            );
          else
            dispatch(
              filtersActions.deleteFilter({ data: name, type: "brandsFilter" })
            );
        }}
      ></div>
      <div
        className={`rounded-[3px] transition-all duration-200 w-[15px] h-[15px] border-[1.5px] ${
          isIncludes ? "border-orange-400 bg-orange-400" : "border-slate-800"
        }`}
      ></div>
    </>
  );
};

export default Checkbox;
