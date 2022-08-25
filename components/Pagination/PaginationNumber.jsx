import { paginationAction } from "../../store/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";

const PaginationNumber = ({ number }) => {
  const currentPage = useSelector((store) => store.pagination.currentPage);
  const dispatch = useDispatch();
  const paginateNumRef = useRef();

/*   useEffect(() => {
    if (currentPage === number) {
      paginateNumRef.current.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [currentPage]); */

  const goToPage = () => {
    dispatch(paginationAction.goToPage(number));
  };

  return (
    <div
      onClick={goToPage}
      className={`text-[18px] transition-all duration-300 flex justify-center items-center px-[5px] w-fit max-h-[30px] min-h-[30px] ${
        currentPage === number ? "bg-orange-600 text-white" : "text-slate-800"
      } rounded-[5px] cursor-pointer`}
      ref={paginateNumRef}
    >
      <div className="mx-auto mt-[5px] text-center min-w-[15px] h-fit">{number}</div>
    </div>
  );
};

export default PaginationNumber;
