import HeartIcon from "@heroicons/react/solid/HeartIcon";
import ShoppingBag from "@heroicons/react/solid/ShoppingBagIcon";
import ViewGrid from "@heroicons/react/solid/ViewGridIcon";
import HomeIcon from "@heroicons/react/solid/HomeIcon";
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

  return items.map((data) => (
    <Link href={data.path}>
      <a className="flex justify-center items-center flex-row-reverse">
        <data.icon
          className={`${
            router.pathname === data.path ? "text-[#222F5D]" : "text-gray-500"
          } w-[28px] h-[28px]`}
        />
        {router.pathname === data.path && (
          <span className="text-[18px] font-bold mt-[6px] mr-[3px] text-[#222F5D] flex justify-center items-center text-center">
            {data.text}
          </span>
        )}
      </a>
    </Link>
  ));
};

export default BottomNavigationItems;
