import { useSelector } from "react-redux";
import SortIcon from "@heroicons/react/24/outline/BarsArrowDownIcon";

const OpenFiltersModalButton = ({ openHandler }) => {
  const sortText = useSelector((store) => store.filters.productsSortFilter);

  return (
    <div
      onClickCapture={(e) => {
        e.stopPropagation();
        openHandler();
      }}
      className="bg-stone-50 h-[45px] rounded-[5px] p-[7px] max-w-[50%] min-w-[50%] flex items-center cursor-pointer"
      dir="rtl"
    >
      <SortIcon className="text-gray-300 min-w-[26px] max-w-[26px] min-h-[26px] max-h-[26px]" />
      <p className="text-slate-800 overflow-hidden text-[16px] whitespace-nowrap w-fit mr-[5px]">{sortText}</p>
    </div>
  );
};

export default OpenFiltersModalButton;
