import Link from "next/link";

const Item = ({ text, path }) => {
  return (
    <li className="mb-[15px]">
      <Link href={path}>
        <a className="text-[18px] text-center flex w-full h-full leading-[17px]">{text}</a>
      </Link>
    </li>
  );
};

export default Item;
