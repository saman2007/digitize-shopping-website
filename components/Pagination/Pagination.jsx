import NextPageButton from "./NextButton";
import PreviousPageButton from "./PreviousButton";
import PaginationNumber from "./PaginationNumber";

const Pagination = ({ pagesNumber }) => {
  const paginationItems = [];

  for (let counter = 1; counter <= pagesNumber; counter++) {
    paginationItems.push(<PaginationNumber number={counter} key={counter} />);
  }

  return (
    <div className="flex justify-center items-center sm:w-auto w-full">
      <NextPageButton pagesNumber={pagesNumber} />
      <div className="pb-[4px] px-[5px] flex mr-[5px] max-w-[150px] sm:max-w-[250px] h-full overflow-x-auto pagination" style={{direction: "rtl"}}>{paginationItems}</div>
      <PreviousPageButton />
    </div>
  );
};

export default Pagination;
