import { useCallback } from "react";
import { useRef, useState } from "react";
import { getMinMaxValues, getPercentOf } from "../../helpers/helpers";

const RangeSlider = ({ minMaxValues, onChange, defaultValues }) => {
  const availableSpace = minMaxValues.max - minMaxValues.min;
  const [leftPercent, setLeftPercent] = useState(defaultValues.minFill);
  const [rightPercent, setRightPercent] = useState(defaultValues.maxFill);

  const barRef = useRef();

  const moveLeftSlider = useCallback(
    (e) => {
      const barRect = barRef.current?.getBoundingClientRect();
      const location = (e.clientX || e.touches[0].clientX) - barRect.left;
      let percent = getPercentOf(location, barRect.width);

      if (rightPercent <= percent) percent = rightPercent;
      else if (percent <= 0) percent = 0;
      else if (percent >= 100) percent = 100;

      const values = getMinMaxValues({
        min: percent,
        max: rightPercent,
        space: availableSpace,
      });

      values.minimumValue += minMaxValues.min;
      values.maximumValue += minMaxValues.min;

      onChange(values);

      setLeftPercent(percent);
    },
    [rightPercent]
  );

  const moveRightSlider = useCallback(
    (e) => {
      const barRect = barRef.current?.getBoundingClientRect();
      const location = (e.clientX || e.touches[0].clientX) - barRect.left;
      let percent = getPercentOf(location, barRect.width);

      if (leftPercent >= percent) percent = leftPercent;
      else if (percent <= 0) percent = 0;
      else if (percent >= 100) percent = 100;

      const values = getMinMaxValues({
        min: leftPercent,
        max: percent,
        space: availableSpace,
      });

      values.maximumValue += minMaxValues.min;
      values.minimumValue += minMaxValues.min;

      onChange(values);

      setRightPercent(percent);
    },
    [leftPercent]
  );

  return (
    <div
      className="w-full relative h-[7px] rounded-[20px] bg-gray-300"
      ref={barRef}
    >
      <div
        className="h-full rounded-[20px] w-full"
        style={{
          background: `linear-gradient(to right, #dadae5 ${leftPercent}% , #FC5858 ${leftPercent}% , #FC5858 ${rightPercent}%, #dadae5 ${rightPercent}%)`,
        }}
      ></div>
      <div
        onMouseDown={() => {
          document.addEventListener("mousemove", moveRightSlider);

          const removeEventHandler = () => {
            document.removeEventListener("mouseup", removeEventHandler);
            document.removeEventListener("mousemove", moveRightSlider);
          };

          document.addEventListener("mouseup", removeEventHandler);
        }}
        onTouchStart={() => {
          document.addEventListener("touchmove", moveRightSlider);

          const removeEventHandler = () => {
            document.removeEventListener("touchend", removeEventHandler);
            document.removeEventListener("touchmove", moveRightSlider);
          };

          document.addEventListener("touchend", removeEventHandler);
        }}
        style={{
          left: `${
            rightPercent > 97 ? 97 : rightPercent < 0 ? 0 : rightPercent - 1
          }%`,
        }}
        className="w-[14px] max h-[14px] rounded-full bg-orange-600 absolute top-[-3px]"
      ></div>
      <div
        onMouseDown={() => {
          document.addEventListener("mousemove", moveLeftSlider);

          const removeEventHandler = () => {
            document.removeEventListener("mouseup", removeEventHandler);
            document.removeEventListener("mousemove", moveLeftSlider);
          };

          document.addEventListener("mouseup", removeEventHandler);
        }}
        onTouchStart={() => {
          document.addEventListener("touchmove", moveLeftSlider);

          const removeEventHandler = () => {
            document.removeEventListener("touchend", removeEventHandler);
            document.removeEventListener("touchmove", moveLeftSlider);
          };

          document.addEventListener("touchend", removeEventHandler);
        }}
        style={{
          left: `${
            leftPercent > 97 ? 97 : leftPercent < 0 ? 0 : leftPercent - 1
          }%`,
        }}
        className="w-[14px] min h-[14px] rounded-full bg-orange-600 absolute top-[-3px]"
      ></div>
    </div>
  );
};

export default RangeSlider;
