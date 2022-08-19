import Title from "../Title";
import Colors from "./BrandColors/Colors";
import Brands from "./Brands/Brands";
import PriceChanger from "./PriceChanger/PriceChanger";

const Filters = ({ datas }) => {
  return (
    <div>
      <Title text={datas.title} />
      {datas.datas.map((data, index) => {
        if (data.type === "brand")
          return (
            <Brands
              key={index}
              datas={data.dropDatas}
              icon={data.icon}
              title={data.title}
            />
          );

        if (data.type === "color") return <Colors key={index} datas={data} />;

        if (data.type === "price")
          return <PriceChanger key={index} datas={data} />;
      })}
    </div>
  );
};
export default Filters;
