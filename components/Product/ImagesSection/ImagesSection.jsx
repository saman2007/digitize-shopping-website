import { useState } from "react";
import MainImage from "./MainImage";
import SubImage from "./SubImage";

const ImagesSection = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      {images.length !== 0 ? (
        <div className="md:m-0 order-1 m-auto w-full very-sm:w-[300px] flex flex-col p-[5px] h-[490px]">
          <MainImage
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
          />
          <div className="w-full overflow-x-auto pb-[2px] flex h-auto">
            {images.map((img, index) => (
              <SubImage
                {...img}
                key={index}
                isSelected={index === selectedImage}
                selectImage={setSelectedImage.bind(this, index)}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ImagesSection;
