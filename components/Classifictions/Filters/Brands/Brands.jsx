import Dropdown from "../../../Dropdown/DropDown";
import Checkbox from "../Checkbox";

const Brands = ({ datas, icon, title }) => {
  return (
    <Dropdown icon={icon} openDropText={title}>
      <div className="flex flex-col">
        <div className="flex items-center relative w-fit">
          <Checkbox name={"all"} changeAll />
          <p className="text-slate-800 mr-[5px] mt-[5px]">همه</p>
        </div>
        {datas.map((data, index) => (
          <div key={index} className="flex items-center relative w-fit">
            <Checkbox name={data} />
            <p className="text-slate-800 mr-[5px] mt-[5px]">{data}</p>
          </div>
        ))}
      </div>
    </Dropdown>
  );
};

export default Brands;
