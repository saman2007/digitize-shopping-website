import Image from "next/image";
import Link from "next/link";

const AboutField = ({ title, cover, path, alt }) => {
  return (
    <div className="h-full w-[150px] flex-shrink-0 rounded-[10px] bg-gray-300">
      <Link href={path}>
        <a className="w-full h-full pt-[10px] flex flex-col rounded-[10px] justify-between items-center">
          <p className="font-yekan-bl text-[17px] text-slate-700">{title}</p>
          <div className="w-full h-[150px] relative">
            <Image src={cover} alt={alt} className="rounded-[10px]" objectFit="contain" layout="fill" />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default AboutField;
