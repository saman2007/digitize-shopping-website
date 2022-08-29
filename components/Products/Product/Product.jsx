import ProductColor from "./ProductColor";
import ProductImage from "./ProductImage";
import ProductKind from "./ProductKind";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";
import GoToProductPage from "./GoToProductPage";
import { useState } from "react";
import { useRef } from "react";

const Product = ({ colors, kind, name, price, path, cover }) => {
  const [isHovering, setIsHovering] = useState(false);
  const productRef = useRef();

  return (
    <div
      ref={productRef}
      onMouseEnter={setIsHovering.bind(this, true)}
      onMouseLeave={setIsHovering.bind(this, false)}
      onTouchStart={setIsHovering.bind(this, true)}
      onTouchEnd={setIsHovering.bind(this, false)}
      className="w-[210px] h-[340px] my-[10px] mx-[5px] rounded-[10px] p-[5px] bg-stone-50 transition-all duration-300 shadow-[0px_3.44685px_6.8937px_rgba(0,0,0,0.08)] hover:shadow-[0px_3.44685px_15.8937px_rgba(0,0,0,0.08)] flex flex-col"
    >
      <ProductImage src={cover} />
      <div className="w-full flex-grow">
        <div className="w-full flex justify-between items-center mb-[15px]">
          <div className="flex justify-center items-center">
            {colors.map((data, index) => (
              <ProductColor color={data} key={data} isFirst={index === 0} />
            ))}
          </div>
          <ProductKind kind={kind} />
        </div>
        <ProductTitle
          productBoxWidth={productRef.current?.clientWidth}
          productBoxPadding={
            productRef.current &&
            window.getComputedStyle(productRef.current).padding
          }
          isHovering={isHovering}
          setIsHovering={setIsHovering}
          text={name}
        />
        <ProductPrice price={price.toLocaleString("en-US")} />
      </div>
      <div className="flex justify-center flex-col items-center">
        <GoToProductPage path={path} />
      </div>
    </div>
  );
};

export default Product;
