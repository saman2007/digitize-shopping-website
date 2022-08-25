import Link from "next/link";

const Logo = ({ isFooter }) => {
  return (
    <Link href="/">
      <a className={`z-[1] ${isFooter ? "mb-[15px]" : "sm:flex hidden"}`}>
        <h1
          className={`font-kalameh-black font-black ${
            isFooter ? "text-[30px]" : "text-[26px]"
          } whitespace-nowrap`}
        >
          <span className="text-orange-600">دیجی </span>
          <span className="text-slate-800">تایز</span>
        </h1>
      </a>
    </Link>
  );
};

export default Logo;
