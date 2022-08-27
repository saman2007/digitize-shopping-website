import XIcon from "@heroicons/react/24/outline/XMarkIcon";

const CloseSearchBar = ({ onClick }) => (
  <XIcon
    onClick={onClick}
    className="w-[25px] sm:hidden h-[25px] text-slate-800 cursor-pointer"
  />
);

export default CloseSearchBar;
