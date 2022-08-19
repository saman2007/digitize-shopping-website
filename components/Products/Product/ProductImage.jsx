import Image from "next/image";

const ProductImage = ({src}) => {
  return (
    <div className="relative mb-[5px] w-full h-[50%] bg-slate-200 flex justify-center items-center rounded-[10px]">
      <Image
        src={src}
        objectFit="contain"
        layout="fill"
      />
    </div>
  );
};

export default ProductImage;
