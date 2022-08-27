import HeartIcon from "@heroicons/react/24/solid/HeartIcon";
import ShoppingBag from "@heroicons/react/24/solid/ShoppingBagIcon";
import ViewGrid from "@heroicons/react/24/solid/Squares2X2Icon";
import HomeIcon from "@heroicons/react/24/solid/HomeIcon";
import Link from "next/link";
import { useRouter } from "next/router";

const items = [
  {
    icon: HeartIcon,
    text: "مورد علاقه ها",
    path: "/favorites",
  },
  {
    icon: ShoppingBag,
    text: "سبد خرید",
    path: "/cart",
  },
  {
    icon: ViewGrid,
    text: "دسته بندی",
    path: "/products",
  },
  {
    icon: HomeIcon,
    text: "خانه",
    path: "/",
  },
];

const BottomNavigationItems = () => {
  const router = useRouter();

  return items.map((data, index) => (
    <Link href={data.path} key={index}>
      <a className="flex justify-center items-center flex-row-reverse">
        <data.icon
          className={`${
            router.pathname === data.path ? "text-slate-1000" : "text-gray-300"
          } w-[28px] h-[28px]`}
        />
        {router.pathname === data.path && (
          <span className="text-[18px] font-bold mt-[6px] mr-[3px] text-slate-1000 flex justify-center items-center text-center">
            {data.text}
          </span>
        )}
      </a>
    </Link>
  ));
};

export default BottomNavigationItems;
