import ArrowDown from "@heroicons/react/solid/ChevronDownIcon";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import * as classifictionIcons from "../icons/ClassifictionsIcons";

const Dropdown = ({ openDropText, icon, defaultOpen = false, children }) => {
  const { [icon]: Icon } = classifictionIcons;
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [actualHeight, setActualHeight] = useState(1500);
  const dropRef = useRef(true);

  useEffect(() => {
    if (dropRef.current && isOpen) {
      const id = setTimeout(() => {
        setActualHeight(dropRef.current.clientHeight);
      }, 250);

      return () => {
        clearTimeout(id);
      };
    }
  }, [isOpen]);

  return (
    <div className="text-slate-800 last:mb-0 mb-[15px] overflow-y-hidden overflow-x-hidden flex flex-col cursor-pointer h-fit">
      <div
        className="flex justify-between items-center mb-[15px]"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="flex justify-center items-center">
          <Icon className="h-[25px] w-[25px]" />
          <p className="mr-[5px]">{openDropText}</p>
        </div>
        <ArrowDown
          className={`h-[25px] w-[25px] transition-all duration-[250ms] ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all mr-[5px] origin-top duration-[250ms]`}
        ref={dropRef}
        style={{ maxHeight: (isOpen ? actualHeight : 0) + "px" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
