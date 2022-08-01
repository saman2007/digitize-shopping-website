import Link from "next/link";
import { useRouter } from "next/router";

const NavItem = ({ text, path, index }) => {
  const router = useRouter();

  return (
    <li className={`${index === 0 ? "mr-[25px]" : ""} ml-[15px] sm:block hidden`}>
      <Link href={path}>
        <a
          className={`text-[16px] flex text-slate-800 w-full h-full whitespace-nowrap ${
            router.pathname === path ? "font-black " : "font-medium"
          }`}
        >
          {text}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
