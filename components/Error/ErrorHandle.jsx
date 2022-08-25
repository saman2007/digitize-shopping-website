const ErrorHandle = ({ tryAgainHandler, errorMessage }) => {
  return (
    <div className="flex gap-y-[10px] flex-col justify-center items-center">
      <p className="text-[20px] font-yekan-heavy text-orange-700 text-center">
        مشکلی در دریافت محصولات پیش آمد. لطفا دوباره تلاش کنید
      </p>
      <button
        onClick={tryAgainHandler}
        className="px-[8px] py-[5px] rounded-[5px] transition-all duration-300 bg-orange-300 hover:bg-orange-400 text-white font-yekan-heavy"
      >
        تلاش مجدد
      </button>
    </div>
  );
};

export default ErrorHandle;
