import MobileProductInfos from "../BuyCard/MobileProductInfos";
import * as icons from "../../icons/ClassifictionsIcons";

const ProductInfos = ({
  title,
  enTitle,
  brand,
  attributes,
  productsDatas,
  kind,
  kindIcon,
}) => {
  const { [kindIcon]: Icon } = icons;
  return (
    <div className="flex-grow w-full sm:w-[80%] m-auto md:w-full order-2 p-[5px]">
      <div className="flex text-orange-400 mr-[-8px] mb-[8px] sm:justify-start justify-center">
        <Icon className="w-[25px] h-[25px]" />
        <span className="mr-[2px] mt-[3px]">{kind}</span>
        <span className="mr-[10px] mt-[3px]">{brand}</span>
      </div>
      <h1 className="text-[24px] text-center sm:text-right text-slate-800 mb-[5px]">
        {title}
      </h1>
      <h2 className="text-[24px] text-center font-yekan-reg sm:text-right text-slate-800 mb-[10px]">
        {enTitle}
      </h2>
      <hr className="bg-stone-100 rounded-[10px] mb-[20px]" />
      <MobileProductInfos
        price={productsDatas.price}
        seller={productsDatas.seller}
        sendBy={productsDatas.sendBy}
        warranty={productsDatas.warranty}
        path={productsDatas.path}
      />
      <div>
        <p className="mb-[10px]">ویژگی های کالا:</p>
        <ul className="flex flex-col">
          {attributes.map((attr, index) => (
            <li key={index} className="before:content-[''] text-slate-800 mb-[7px] before:rounded-full before:bg-orange-600 before:font-bold before:inline-block before:w-[9px] before:h-[9px] before:ml-[5px]">
              {attr.title}:<div className="font-yekan-bl">{attr.value}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductInfos;
