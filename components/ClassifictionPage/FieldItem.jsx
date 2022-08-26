import Image from "next/image";
import Link from "next/link";

const FieldItem = ({ title, cover, path, alt }) => {
  return (
    <div className="h-[180px] flex-shrink-0 rounded-[10px] w-[150px] bg-stone-100 shadow-[0px_2px_8px_rgba(0,0,0,0.08]">
      <Link href={path}>
        <a className="w-full h-full p-[10px] flex flex-col rounded-[10px] justify-between items-center">
          <div className="w-full h-[110px] relative">
            <Image
              src={cover}
              alt={alt}
              className="rounded-[10px]"
              objectFit="contain"
              layout="fill"
            />
          </div>
          <p className="font-yekan-bl text-[17px] text-slate-700">{title}</p>
        </a>
      </Link>
    </div>
  );
};

export default FieldItem;
