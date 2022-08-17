import Dropdown from "../../../Dropdown/DropDown";
import Color from "./Color";

const Colors = ({ datas }) => {
  return (
    <Dropdown icon={datas.icon} openDropText={datas.title}>
      <div className="flex flex-wrap">
        {datas.dropDatas.map((data, index) => (
          <Color key={index} color={data.hex} colorName={data.name} />
        ))}
      </div>
    </Dropdown>
  );
};

export default Colors;
