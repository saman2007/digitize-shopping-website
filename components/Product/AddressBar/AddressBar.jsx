import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import ArrowLeftIcon from "../../icons/ArrowLeftIcon";

const AddressBar = ({ addressArray, currentProduct }) => {
  const router = useRouter();
  const paths = router.asPath.split("/").slice(2);

  return (
    <div
      style={{ direction: "rtl" }}
      className="w-[98%] p-[7px] overflow-x-auto items-center rounded-[10px] bg-stone-50 flex my-[20px] mx-auto h-[50px]"
    >
      {addressArray.map((address, index) => (
        <Fragment key={index}>
          {index !== 0 && (
            <ArrowLeftIcon className="w-[15px] h-[15px] flex-shrink-0 mr-[7px]" />
          )}
          <Link href={"/products/" + paths.slice(0, index + 1).join("/")}>
            <a
              className={`text-orange-400 whitespace-nowrap ${
                index !== 0 ? "mr-[7px]" : ""
              }`}
            >
              {address}
            </a>
          </Link>
        </Fragment>
      ))}
      <ArrowLeftIcon className="w-[15px] h-[15px] flex-shrink-0 mr-[7px]" />
      <p className={`mr-[7px] whitespace-nowrap`}>{currentProduct}</p>
    </div>
  );
};

export default AddressBar;
