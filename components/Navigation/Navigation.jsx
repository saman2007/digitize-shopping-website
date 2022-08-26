import Address from "./Address";
import NavItems from "./NavItems";
import SearchBar from "./SearchBar";

const Navigation = ({ items }) => {
  return (
    <nav className={`left-0 right-0 h-[80px] bg-stone-50 fixed shadow-[0px_4px_14px_rgba(0,0,0,0.08)] flex justify-between z-10 items-center p-[10px]`}>
      <SearchBar />
      <Address />
      <NavItems items={items} />
    </nav>
  );
};

export default Navigation;
