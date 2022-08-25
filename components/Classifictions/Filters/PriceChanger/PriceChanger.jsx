import Dropdown from "../../../Dropdown/DropDown";
import RangeSlider from "../../../RangeSlider/RangeSlider";
import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../../../../store/Filters";
import { useTransition } from "react";

const PriceChanger = ({ datas }) => {
  const price = useSelector((store) => store.filters.price);
  const allowedPrice = useSelector((store) => store.filters.allowedPrice);
  const [isPending, transition] = useTransition();
  const dispatch = useDispatch();

  return (
    <Dropdown icon={datas.icon} openDropText={datas.title}>
      <div className="w-full flex-col h-full flex justify-center items-center">
        <div className="flex flex-col w-[90%] h-[30px] items-center justify-center">
          <RangeSlider
            defaultValues={{ minFill: 0, maxFill: 100 }}
            minMaxValues={allowedPrice}
            onChange={(e) => {
              transition(() => {
                const price = { min: e.minimumValue, max: e.maximumValue };
                dispatch(filtersActions.changePrice(price));
              });
            }}
          />
        </div>
        <div className="w-full h-full flex flex-col justify-center items-start">
          <p className="text-[20px] text-slate-1000 mb-[5px] mt-[10px]">
            از: {Number(price.min.toFixed(0)).toLocaleString("en-US")} تومان
          </p>
          <p className="text-[20px] text-slate-1000">
            تا: {Number(price.max.toFixed(0)).toLocaleString("en-US")} تومان
          </p>
        </div>
      </div>
    </Dropdown>
  );
};

export default PriceChanger;
