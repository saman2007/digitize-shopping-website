const Field = ({ children }) => {
  return (
    <div className="w-full mb-[20px] sm:w-[unset] sm:max-w-full h-[220px] flex items-end space-x-[15px] pb-[5px] overflow-x-auto" dir="rtl">
      {children}
    </div>
  );
};

export default Field;
