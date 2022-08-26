import Image from "next/image";

const Banner = ({ src, alt }) => {
  return <Image src={src} alt={alt} objectFit="contain" layout="fill" />;
};

export default Banner;
