import SortIcon from "@heroicons/react/solid/SortDescendingIcon";
import Filter from "./Filter";

const FiltersContainer = ({ filters }) => {
  return (
    <div className="col-start-1 sm:col-end-8 col-end-9 row-start-1 row-end-2 w-full h-full flex overflow-x-auto">
      <div
        className="sm:mb-0 overflow-x-auto bg-stone-50 rounded-[5px] w-full shadow-sm flex items-center p-[3px]"
        style={{ direction: "rtl" }}
      >
        <SortIcon className="max-w-[30px] min-w-[30px] min-h-[30px] max-h-[30px] bg-orange-400 text-orange-100 rounded-[5px]" />
        {filters.map((text, index) => (
          <Filter text={text} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FiltersContainer;
