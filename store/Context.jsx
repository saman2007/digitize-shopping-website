import { createContext, useState } from "react";

const context = createContext({
  openBackdrop: () => {},
  closeBackdrop: () => {},
  setOnBackdropClickHandler: () => {},
  onBackdropClickHandler: () => {},
  isBackdropOpen: true,
});

const ContextContainer = ({ children }) => {
  const [isBackdropOpen, setIsBackdropOpen] = useState(false);
  const [onBackdropClickHandler, setOnBackdropClickHandler] = useState(
    () => {}
  );

  const value = {
    openBackdrop: setIsBackdropOpen.bind(null, true),
    closeBackdrop: setIsBackdropOpen.bind(null, false),
    onBackdropClickHandler,
    setOnBackdropClickHandler,
    isBackdropOpen,
  };

  return <context.Provider value={value}>{children}</context.Provider>;
};

export { context };
export default ContextContainer;
