import SearchIcon from "@heroicons/react/outline/SearchIcon";

const SearchButton = () => {
  return (
    <button
      className="rounded-[5px] bg-transparent outline-none p-[10px]"
      type="submit"
    >
      <SearchIcon className="max-w-[25px] max-h-[25px] min-w-[25px] min-h-[25px] text-slate-800" />
    </button>
  );
};

export default SearchButton;
