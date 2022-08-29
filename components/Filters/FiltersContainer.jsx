import SortIcon from "@heroicons/react/24/solid/BarsArrowDownIcon";
import Filter from "./Filter";

const FiltersContainer = ({ filters }) => {
  return (
      <div
        className="sm:mb-0 h-full sm:mr-[15px] overflow-x-auto bg-stone-50 rounded-[5px] w-full shadow-sm flex items-center sm:flex-row flex-col p-[3px]"
        style={{ direction: "rtl" }}
      >
        <SortIcon className="max-w-[30px] sm:mb-0 mb-[30px] min-w-[30px] min-h-[30px] max-h-[30px] bg-orange-400 text-orange-100 rounded-[5px]" />
        {filters.map((text, index) => (
          <Filter text={text} key={index} />
        ))}
      </div>
  );
};

export default FiltersContainer;
