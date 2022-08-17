import { useEffect, useRef, useState } from "react";
import CloseSearchBar from "./CloseSearchBar";
import SearchButton from "./SearchButton";

const SearchBar = () => {
  const [shouldOpen, setShouldOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) if (shouldOpen) inputRef.current.focus();
  }, [shouldOpen]);

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (window.innerWidth <= 640 && !shouldOpen) {
      setShouldOpen(true);
      return;
    }
  };

  return (
    <form
      onSubmit={submitFormHandler}
      className={`rounded-[5px] ${
        shouldOpen ? "max-w-full absolute left-0 right-0" : "max-w-[45px]"
      } z-10 bg-stone-100 transition-all duration-[250ms] sm:max-w-[500px] sm:static sm:shadow-none shadow-md sm:h-[50px] flex-grow flex flex-row-reverse items-center`}
    >
      <SearchButton />
      <CloseSearchBar
        onClick={() => {
          setShouldOpen(false);
        }}
      />
      <input
        ref={inputRef}
        onChange={(e) => setSearchText(e.currentTarget.value)}
        type="text"
        placeholder="جستجوی نام برند، نام محصول، نام مدل و..."
        className={`bg-transparent px-[7px] sm:block ${
          shouldOpen ? "block" : "hidden"
        } py-[5px] w-full outline-none text-slate-800 sm:h-full h-[45px] text-right placeholder:text-gray-300`}
        style={{ direction: "rtl" }}
      />
    </form>
  );
};

export default SearchBar;
