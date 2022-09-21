import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../../../../store/Filters";

const Color = ({ color, colorName, changeAll, isSelected, extraClasses = "" }) => {
  const colors = useSelector((store) => store.filters.brandColors);
  const dispatch = useDispatch();
  const doesExist = colors.includes(colorName);

  useEffect(() => {
    if (isSelected) {
      dispatch(
        filtersActions.changeFilter({
          type: "brandColors",
          datas: [color],
        })
      );
    }
  }, []);

  return (
    <div
      onClick={() => {
        if (changeAll) {
          dispatch(
            filtersActions.changeFilter({
              type: "brandColors",
              datas: ["all"],
            })
          );
          return;
        }
        if (!doesExist)
          dispatch(
            filtersActions.addFilter({ data: colorName, type: "brandColors" })
          );
        else
          dispatch(
            filtersActions.deleteFilter({
              data: colorName,
              type: "brandColors",
              addAll: colors.length === 1,
            })
          );
      }}
      className={`w-[25px] mb-[5px] flex justify-center items-center mr-[5px] h-[25px] border-2 text-[12px] rounded-full border-solid transition-all duration-150 ${
        doesExist ? "border-slate-900" : "border-gray-300"
      } ${extraClasses}`}
      style={{ backgroundColor: `#${color}` }}
    >
      {changeAll ? "همه" : ""}
    </div>
  );
};

export default Color;
