import Link from "next/link";

const GoToProductPage = ({ path }) => {
  return (
    <>
      <hr className="text-gray-300 mb-[5px] w-full" />
      <Link href={path}>
        <a className="text-orange-600 text-[18px] text-center block w-full">
          مشاهده و سفارش
        </a>
      </Link>
    </>
  );
};

export default GoToProductPage;
