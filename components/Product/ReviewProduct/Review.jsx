import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const Review = ({ htmlStrings }) => {
  const [showMore, setShowMore] = useState(false);
  const reviewEl = useRef();

  useEffect(() => {
    if (reviewEl.current && showMore) {
      reviewEl.current.style.maxHeight = "none";
      const height = window.getComputedStyle(reviewEl.current).height;
      reviewEl.current.style.maxHeight = "0px";

      setTimeout(() => {
        reviewEl.current.style.maxHeight = height;
      }, 0);
    } else if (reviewEl.current) {
      reviewEl.current.style.maxHeight = "185px";
    }
  }, [showMore]);

  const showMoreOrLess = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div
        className="text-slate-800 overflow-y-hidden transition-all duration-500"
        style={{ maxHeight: "185px" }}
        ref={reviewEl}
      >
        <h2 className="text-[24px] font-yekan-bl mb-[30px]">
          نقد و بررسی این محصول
        </h2>
        <div
          dangerouslySetInnerHTML={{ __html: htmlStrings }}
          className="overflow-y-hidden"
        ></div>
      </div>
      <p
        onClick={showMoreOrLess}
        className="mt-[10px] text-orange-700 cursor-pointer w-fit"
      >
        {showMore ? "مشاهده کمتر" : "مشاهده بیشتر"}
      </p>
    </div>
  );
};

export default Review;
