import SellerIcon from "../../icons/SellerIcon";
import SendByIcon from "../../icons/SendByIcon";
import WarrantyIcon from "../../icons/WarrantyIcon";

const MobileProductInfos = ({ seller, warranty, sendBy, price, path }) => {
  return (
    <div className="flex justify-around flex-wrap sm:hidden gap-x-[5px] mb-[20px]">
      <div className="text-slate-800 text-[18px] flex items-center">
        <SellerIcon className="mt-[-5px]" />
        <p className="mr-[3px]">فروشنده:</p>
        <span className="font-yekan-reg text-[17px] mr-[4px]">{seller}</span>
      </div>
      <div className="text-slate-800 text-[18px] flex items-center">
        <WarrantyIcon className="mt-[-5px]" />
        <p className="mr-[3px]">گارانتی:</p>
        <span className="font-yekan-reg text-[17px] mr-[4px]">{warranty}</span>
      </div>
      <div className="text-slate-800 text-[18px] flex items-center">
        <SendByIcon className="mt-[-5px]" />
        <p className="mr-[3px]">ارسال توسط:</p>
        <span className="font-yekan-reg text-[17px] mr-[4px]">{sendBy}</span>
      </div>
    </div>
  );
};

export default MobileProductInfos;
