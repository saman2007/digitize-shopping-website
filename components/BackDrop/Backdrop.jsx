import { useContext } from "react";
import { context } from "../../store/Context";

const Backdrop = () => {
  const ctx = useContext(context);

  return (
    <div
      onClickCapture={(e) => {
        e.stopPropagation();
        ctx.onBackdropClickHandler();
        ctx.closeBackdrop();
      }}
      className={`fixed left-0 z-30 right-0 top-0 bottom-0 bg-gray-300-30op transition-all duration-300 ${
        ctx.isBackdropOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    ></div>
  );
};

export default Backdrop;
