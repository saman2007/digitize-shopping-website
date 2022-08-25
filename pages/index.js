import Classifictions from "../components/Classifictions/Classifictions";
import FiltersContainer from "../components/Filters/FiltersContainer";
import SortFilters from "../data/SortFilters.json";
import classifictions from "../data/Classifictions.json";
import Products from "../components/Products/Products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filtersActions } from "../store/Filters";
import Pagination from "../components/Pagination/Pagination";
import { getAllProducts } from "../helpers/helpers";
import useProducts from "../hooks/useProducts";

export default function Home({ initProducts }) {
  const page = useSelector((store) => store.pagination.currentPage);
  const { getProducts, hasError, isLoading, datas } = useProducts(false, page);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      filtersActions.initializeFilters({
        colors: initProducts.colors,
        brands: initProducts.brands,
        price: initProducts.price,
      })
    );
  }, []);

  return (
    <>
      <div className="grid grid-cols-[repeat(8,auto)] sm:grid-cols-[repeat(7,auto),220px] gap-[15px] grid-rows-[50px,repeat(7,auto)] w-full p-[15px] ">
        <FiltersContainer filters={SortFilters} />
        <Classifictions classifictions={classifictions} />
        <div className="col-start-1 sm:col-end-8 col-end-9 row-start-4 sm:row-start-2 row-end-[7]">
          <Products
            datas={datas ? datas.datas : initProducts.datas}
            hasError={hasError}
            isLoading={isLoading}
            tryAgainHandler={getProducts}
          />
          <div className="w-full h-fit flex justify-center items-center">
            {(datas ? datas.pages !== 0 : initProducts.pages !== 0) &&
              !isLoading && (
                <Pagination
                  pagesNumber={datas ? datas.pages : initProducts.pages}
                />
              )}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const products = getAllProducts();

  return {
    props: { initProducts: products },
  };
}
