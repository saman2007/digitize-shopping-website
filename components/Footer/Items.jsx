import Item from "./Item";

const Items = ({ items }) => {
  return (
    <ul className="flex flex-col text-slate-800 items-center">
      <h3 className="mb-[15px] text-[22px] font-yekan-bl">{items.title}</h3>
      {items.datas.map((data, index) => (
        <Item path={data.path} key={index} text={data.text} />
      ))}
    </ul>
  );
};

export default Items;
