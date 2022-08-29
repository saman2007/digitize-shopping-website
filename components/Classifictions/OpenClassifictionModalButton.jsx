import FunnelIcon from "@heroicons/react/24/outline/FunnelIcon";

const OpenClassifictionModalButton = ({ openHandler }) => {
  return (
    <div
      onClickCapture={(e) => {
        e.stopPropagation();
        openHandler();
      }}
      className="bg-stone-50 ml-[10px] overflow-hidden h-[45px] rounded-[5px] p-[7px] max-w-[50%] min-w-[50%] flex items-center cursor-pointer "
      dir="rtl"
    >
      <FunnelIcon className="text-gray-300 min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]" />
      <p className="text-slate-800 overflow-hidden text-[16px] whitespace-nowrap w-fit mr-[5px]">فیلتر</p>
    </div>
  );
};

export default OpenClassifictionModalButton;
