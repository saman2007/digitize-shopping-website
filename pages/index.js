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
import bannerDatas from "../data/Banners.json";
import Link from "next/link";
import Banner from "../components/Banner/Banner";
import BottomModal from "../components/BottomModal/BottomModal";
import { useContext } from "react";
import { context } from "../store/Context";
import { useState } from "react";
import OpenClassifictionModalButton from "../components/Classifictions/OpenClassifictionModalButton";
import OpenFiltersModalButton from "../components/Filters/OpenFiltersModalButton";

export default function Home({ initProducts }) {
  const page = useSelector((store) => store.pagination.currentPage);
  const ctx = useContext(context);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isSortModalOpen, setIsSortModalOpen] = useState(false);
  const { getProducts, hasError, isLoading, datas } = useProducts(false, page);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filtersActions.resetFilters());
    dispatch(filtersActions.changeAddress("خانه"));
    dispatch(
      filtersActions.initializeFilters({
        colors: initProducts.colors,
        brands: initProducts.brands,
        price: initProducts.price,
      })
    );
  }, []);

  useEffect(() => {
    if (isFilterModalOpen) {
      ctx.setOnBackdropClickHandler(() =>
        setIsFilterModalOpen.bind(null, false)
      );
      ctx.openBackdrop();
    } else ctx.closeBackdrop();
  }, [isFilterModalOpen]);

  useEffect(() => {
    if (isSortModalOpen) {
      ctx.setOnBackdropClickHandler(() => setIsSortModalOpen.bind(null, false));
      ctx.openBackdrop();
    } else ctx.closeBackdrop();
  }, [isSortModalOpen]);

  return (
    <>
      <BottomModal
        isOpen={isFilterModalOpen}
        closeModalHandler={setIsFilterModalOpen.bind(null, false)}
        dir="rtl"
      >
        <Classifictions classifictions={classifictions} />
      </BottomModal>
      <BottomModal
        isOpen={isSortModalOpen}
        closeModalHandler={setIsSortModalOpen.bind(null, false)}
        dir="rtl"
      >
        <FiltersContainer filters={SortFilters} />
      </BottomModal>
      <div className="grid grid-cols-[repeat(8,auto)] sm:grid-cols-[repeat(7,auto),220px] gap-[15px] grid-rows-[50px,repeat(7,auto)] w-full p-[15px] ">
        <div className="col-start-1 sm:col-end-8 col-end-9 row-start-1 row-end-2 w-full h-full hidden sm:flex overflow-x-auto">
          <FiltersContainer filters={SortFilters} />
        </div>
        <div
          className="flex flex-col col-start-1 sm:col-start-8 col-end-9 row-end-3 row-start-1 sm:row-end-[8] "
          dir="rtl"
        >
          <div className="sm:block hidden">
            <Classifictions classifictions={classifictions} />
          </div>
          <div className="w-full h-full items-center flex sm:hidden gap-x-[10px] justify-center">
            <OpenClassifictionModalButton
              openHandler={setIsFilterModalOpen.bind(null, true)}
            />
            <OpenFiltersModalButton
              openHandler={setIsSortModalOpen.bind(null, true)}
            />
          </div>

          <div className="w-full hidden sm:flex sm:flex-col overflow-x-auto items-center gap-x-[10px] justify-center">
            {bannerDatas.map((data, index) => (
              <Link href={data.path} key={index}>
                <a className="w-[220px] h-[220px] block relative">
                  <Banner src={data.src} alt={data.alt} />
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="col-start-1 sm:col-end-8 col-end-9 row-start-3 sm:row-start-2 row-end-[8]">
          <Products
            datas={datas ? datas.datas : initProducts.datas}
            hasError={hasError}
            isLoading={isLoading}
            tryAgainHandler={getProducts}
          />
          <div className="w-full h-fit flex justify-center items-center">
            {(datas ? datas.pages !== 0 : initProducts.pages !== 0) &&
              !isLoading &&
              !hasError && (
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
