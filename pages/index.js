import Classifictions from "../components/Classifictions/Classifictions";
import FiltersContainer from "../components/Filters/FiltersContainer";
import SortFilters from "../data/SortFilters.json";
import classifictions from "../data/Classifictions.json";
import Products from "../components/Products/Products";
import productsDatas from "../data/Products.json";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { filtersActions } from "../store/Filters";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    let mappedColors = productsDatas.map((pr) => pr.colors);
    mappedColors = mappedColors.flat();
    mappedColors = [...new Set(mappedColors)];

    dispatch(
      filtersActions.changeFilter({
        type: "allAvailableColors",
        datas: mappedColors,
      })
    );
  }, []);

  return (
    <>
      <div className="grid grid-cols-[repeat(8,auto)] sm:grid-cols-[repeat(7,auto),220px] gap-[15px] grid-rows-[50px,repeat(7,auto)] w-full p-[15px] ">
        <FiltersContainer filters={SortFilters} />
        <Classifictions classifictions={classifictions} />
        <Products datas={productsDatas} />
      </div>
    </>
  );
}
