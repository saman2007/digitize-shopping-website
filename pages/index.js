import Classifictions from "../components/Classifictions/Classifictions";
import FiltersContainer from "../components/Filters/FiltersContainer";
import SortFilters from "../data/SortFilters.json";
import classifictions from "../data/Classifictions.json";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-[repeat(8,auto)] sm:grid-cols-[repeat(7,auto),220px] gap-[15px] grid-rows-[50px,repeat(7,auto)] w-full p-[15px] ">
        <FiltersContainer filters={SortFilters} />
        <Classifictions classifictions={classifictions} />
      </div>
    </>
  );
}
