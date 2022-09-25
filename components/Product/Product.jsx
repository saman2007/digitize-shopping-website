import { useEffect } from "react";
import BuyCard from "./BuyCard/BuyCard";
import ImagesSection from "./ImagesSection/ImagesSection";
import ProductInfos from "./ProductInfos/ProductInfos";
import { useDispatch } from "react-redux";
import { filtersActions } from "../../store/Filters";
import AddressBar from "./AddressBar/AddressBar";
import Review from "./ReviewProduct/Review";

function propertiesExist(obj, ...properties) {
  return !properties.some((key) => {
    if (key in obj) return false;
    else return true;
  });
}

const Product = ({ datas, classifiction }) => {
  const dispatch = useDispatch();
  const propertiesExistance = propertiesExist(
    datas,
    "brand",
    "attributes",
    "enName",
    "name",
    "path",
    "warranty",
    "sendBy",
    "seller",
    "price"
  );

  useEffect(() => {
    dispatch(filtersActions.changeAddress("صفحه محصول"));
  }, []);

  return (
    <>
      {propertiesExistance ? (
        <AddressBar
          addressArray={datas.addressArray}
          currentProduct={datas.name}
        />
      ) : (
        ""
      )}

      <div
        dir="rtl"
        className="w-[98%] p-[7px] my-[20px] flex-col flex mx-auto h-fit bg-stone-50 rounded-[10px]"
      >
        {propertiesExistance ? (
          <>
            <div className="w-full md:flex-row flex-col flex h-fit mb-[80px]">
              <ImagesSection images={datas.pageImages} />
              <BuyCard
                price={datas.price}
                seller={datas.seller}
                sendBy={datas.sendBy}
                warranty={datas.warranty}
                path={datas.path}
              />
              <ProductInfos
                kind={classifiction.text}
                kindIcon={classifiction.icon}
                productsDatas={datas}
                title={datas.name}
                enTitle={datas.enName}
                attributes={datas.attributes}
                brand={datas.brand}
              />
            </div>
            <Review htmlStrings={datas.review} />
          </>
        ) : (
          <h1 className="w-full text-center text-orange-700 text-[22px] font-bold">
            اطلاعات محصول کامل نمیباشد. لطفا بعدا مراجعه فرمایید.
          </h1>
        )}
      </div>
    </>
  );
};

export default Product;
