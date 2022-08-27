import XIcon from "@heroicons/react/24/solid/XMarkIcon";

const BottomModal = ({ children, isOpen, dir, closeModalHandler }) => {
  return (
    <div
      dir={dir}
      className={`w-full sm:hidden overflow-hidden flex flex-col fixed z-40 pt-[10px] bg-stone-50 transition-all duration-300 h-[75%] rounded-t-[30px] ${
        isOpen ? "bottom-0" : "bottom-[-100%]"
      }`}
    >
      <div className="overflow-y-auto h-full flex flex-col rounded-t-[30px]">
        <XIcon
          className="max-w-[35px] mr-[10px] cursor-pointer max-h-[35px] min-w-[35px] min-h-[35px] text-orange-700 mb-[10px]"
          onClick={closeModalHandler}
        />
        {children}
      </div>
    </div>
  );
};

export default BottomModal;
