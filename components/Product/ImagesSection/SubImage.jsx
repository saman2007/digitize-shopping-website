import Image from "next/image";

const SubImage = ({ src, alt, isSelected, selectImage }) => {
  return (
    <>
      <div
        className={`flex-shrink-0 m-auto w-[80px] h-[90px] border cursor-pointer p-[2px] transition-all duration-300 border-solid ${
          isSelected ? "border-orange-700" : "border-gray-300"
        } rounded-[10px]`}
        onClick={selectImage}
      >
        <div className="w-full h-full relative">
          {src && (
            <Image
              src={src}
              alt={alt}
              objectFit="contain"
              layout="fill"
              className="rounded-[5px]"
            />
          )}
        </div>
      </div>
      <div className="mr-[10px]"></div>
    </>
  );
};

export default SubImage;
