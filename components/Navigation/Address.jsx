import { useSelector } from "react-redux";

const Address = () => {
  const address = useSelector((store) => store.filters.address);

  return (
    <p className="text-[20px] font-bold font-yekan-bl sm:hidden text-slate-800">
      {address}
    </p>
  );
};

export default Address;
