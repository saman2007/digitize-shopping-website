import SellerIcon from "../../icons/SellerIcon";
import SendByIcon from "../../icons/SendByIcon";
import WarrantyIcon from "../../icons/WarrantyIcon";
import AddToCart from "./AddToCart";

const BuyCard = ({ seller, warranty, sendBy, price, path }) => {
  return (
    <div className="flex items-start h-fit order-3">
      <div className="bg-stone-100 rounded-[5px] h-fit md:min-h-[200px] md:m-0 m-auto w-full sm:w-[80%] md:w-[220px] justify-between p-[8px] flex flex-col">
        <div className="md:block hidden">
          <div className="text-slate-800 text-[18px] flex items-center mb-[5px]">
            <SellerIcon className="mt-[-5px]" />
            <p className="mr-[3px]">فروشنده:</p>
            <span className="font-yekan-reg text-[17px] mr-[4px]">
              {seller}
            </span>
          </div>
          <div className="text-slate-800 text-[18px] flex items-center mb-[5px]">
            <WarrantyIcon className="mt-[-5px]" />
            <p className="mr-[3px]">گارانتی:</p>
            <span className="font-yekan-reg text-[17px] mr-[4px]">
              {warranty}
            </span>
          </div>
          <div className="text-slate-800 text-[18px] mb-[20px] flex items-center">
            <SendByIcon className="mt-[-5px]" />
            <p className="mr-[3px]">ارسال توسط:</p>
            <span className="font-yekan-reg text-[17px] mr-[4px]">
              {sendBy}
            </span>
          </div>
        </div>
        <div className="w-full flex md:flex-col flex-wrap-reverse md:flex-wrap justify-between items-center">
          <AddToCart extraClasses={"w-fit md:w-full flex-grow md:order-2"} />
          <p className="text-orange-600 text-[20px] md:order-1 text-left m-0 md:mb-[3px] flex-grow">
            {price.toLocaleString("en-US")}
            <span className="font-yekan-reg mr-[3px]">تومان</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
