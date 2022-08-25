import PreviousIcon from "../icons/PreviousIcon";
import { paginationAction } from "../../store/Pagination";
import { useSelector, useDispatch } from "react-redux";

const PreviousButton = () => {
  const currentPage = useSelector((store) => store.pagination.currentPage);
  const dispatch = useDispatch();

  const goToPreviousPage = () => {
    if (currentPage !== 1) {
      dispatch(paginationAction.goPrevPage());
    }
  };

  return (
    <PreviousIcon
      onClick={goToPreviousPage}
      className={`${
        currentPage === 1 ? "fill-gray-300" : "fill-slate-800"
      } cursor-pointer`}
    />
  );
};

export default PreviousButton;
