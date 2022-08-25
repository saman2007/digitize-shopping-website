import Product from "./Product/Product";

const Products = ({ datas, hasError, isLoading, tryAgainHandler }) => {
  return (
    <div className=" mb-[30px] flex-wrap justify-around gap-[10px] flex w-full">
      {datas !== null && !hasError && !isLoading ? (
        datas.length !== 0 ? (
          datas.map((data) => <Product {...data} key={data.name} />)
        ) : (
          <p className="text-[20px] font-yekan-heavy text-orange-700">
            محصولی با مشخصات انتخاب شده شما وجود نداشت
          </p>
        )
      ) : isLoading ? (
        <p className="text-[20px] font-yekan-heavy text-orange-700">
          در حال دریافت محصولات
        </p>
      ) : (
        hasError && (
          <div className="flex gap-y-[10px] flex-col justify-center items-center">
            <p className="text-[20px] font-yekan-heavy text-orange-700">
              مشکلی در دریافت محصولات پیش آمد. لطفا دوباره تلاش کنید
            </p>
            <button
              onClick={tryAgainHandler}
              className="px-[8px] py-[5px] rounded-[5px] transition-all duration-300 bg-orange-300 hover:bg-orange-400 text-white font-yekan-heavy"
            >
              تلاش مجدد
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default Products;
