import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import useMove from "../../../hooks/useMove";

const ProductTitle = ({
  text,
  isHovering,
  productBoxWidth,
  productBoxPadding,
  setIsHovering,
}) => {
  const textRef = useRef();
  const transformValue = useMove(
    isHovering,
    setIsHovering,
    textRef,
    Number(productBoxPadding?.replace("px", "")),
    productBoxWidth
  );

  return (
    <div
      className="overflow-hidden w-full mb-[5px]"
      style={{ direction: "rtl" }}
    >
      <p
        className="text-[18px]  text-right text-slate-800 w-fit whitespace-nowrap"
        style={{ transform: `translateX(${transformValue}px)` }}
        ref={textRef}
      >
        {text}
      </p>
    </div>
  );
};

export default ProductTitle;
