import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../../../../store/Filters";

const Color = ({ color, colorName }) => {
  const colors = useSelector((store) => store.filters.brandColors);
  const dispatch = useDispatch();
  const doesExist = colors.includes(colorName);

  return (
    <div
      onClick={() => {
        if (!doesExist)
          dispatch(
            filtersActions.addFilter({ data: colorName, type: "brandColors" })
          );
        else
          dispatch(
            filtersActions.deleteFilter({
              data: colorName,
              type: "brandColors",
            })
          );
      }}
      className={`${color} w-[25px] mr-[5px] h-[25px] border rounded-full border-solid transition-all duration-150 ${
        doesExist ? "border-slate-900" : "border-gray-300"
      }`}
    ></div>
  );
};

export default Color;
