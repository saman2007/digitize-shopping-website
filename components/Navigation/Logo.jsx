import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a className="hidden z-[1] sm:flex">
        <h1 className="font-kalameh-black font-black text-[26px] whitespace-nowrap">
          <span className="text-orange-600">دیجی </span>
          <span className="text-slate-800">تایز</span>
        </h1>
      </a>
    </Link>
  );
};

export default Logo;
