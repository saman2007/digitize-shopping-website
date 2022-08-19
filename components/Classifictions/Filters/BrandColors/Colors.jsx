import { useSelector } from "react-redux";
import Dropdown from "../../../Dropdown/DropDown";
import Color from "./Color";

const Colors = ({ datas }) => {
  const colors = useSelector((store) => store.filters.allAvailableColors);

  return (
    <Dropdown icon={datas.icon} openDropText={datas.title}>
      <div className="flex flex-wrap">
        <Color color={"#fff"} colorName={"all"} changeAll />

        {colors.map((data, index) => (
          <Color key={index} color={data} colorName={data} />
        ))}
      </div>
    </Dropdown>
  );
};

export default Colors;
