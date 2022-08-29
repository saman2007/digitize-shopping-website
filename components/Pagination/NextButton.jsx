import NextIcon from "../icons/NextIcon";
import { paginationAction } from "../../store/Pagination";
import { useSelector, useDispatch } from "react-redux";

const NextButton = ({ pagesNumber }) => {
  const currentPage = useSelector((store) => store.pagination.currentPage);
  const dispatch = useDispatch();

  const goToNextPage = () => {
    if (currentPage !== pagesNumber) {
      dispatch(paginationAction.goNextPage());
    }
  };

  return (
    <NextIcon
      onClick={goToNextPage}
      className={`mr-[5px] ${
        currentPage === pagesNumber ? "fill-gray-300" : "fill-slate-800"
      } cursor-pointer`}
    />
  );
};

export default NextButton;
