import Image from "next/image";

const MainImage = ({ src, alt }) => {
  return (
    <div className="relative w-full h-[380px] mb-[5px]">
      <Image src={src} objectFit="contain" layout="fill" alt={alt} />
    </div>
  );
};

export default MainImage;
