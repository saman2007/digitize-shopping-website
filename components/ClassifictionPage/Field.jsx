const Field = ({ children }) => {
  return (
    <div className="w-full sm:w-[unset] sm:max-w-full h-[220px] flex items-end gap-x-[15px] pb-[5px] overflow-x-auto" dir="rtl">
      {children}
    </div>
  );
};

export default Field;
