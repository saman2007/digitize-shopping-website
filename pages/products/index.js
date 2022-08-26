import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filtersActions } from "../../store/Filters";
import classifictionDatas from "../../data/ClassifictionPage.json";
import AllFields from "../../components/ClassifictionPage/AllFields";

const ProductsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filtersActions.changeAddress("دسته بندی"));
  }, []);

  return (
    <div className="flex flex-col gap-y-[20px] p-[20px] sm:items-center my-[50px]">
      <AllFields datas={classifictionDatas} />
    </div>
  );
};

export default ProductsPage;
