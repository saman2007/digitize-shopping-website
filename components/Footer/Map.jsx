import Image from "next/image";

const Map = ({ src, alt }) => {
  return (
    <div className="w-[200px] h-[200px] relative mb-[5px]">
      <Image src={src} alt={alt} objectFit="contain" layout="fill" />
    </div>
  );
};

export default Map;
