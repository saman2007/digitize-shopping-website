import Column from "./Column";
import Logo from "../../components/Navigation/Logo";
import AboutText from "./AboutText";
import Map from "./Map";
import PhoneIcon from "@heroicons/react/solid/PhoneIcon";
import AtSymbolIcon from "@heroicons/react/solid/AtSymbolIcon";
import Items from "./Items";

const Footer = ({ items }) => {
  return (
    <footer
      dir="rtl"
      className="flex gap-[25px] bg-stone-50 min-h-[200px] w-full p-[30px] flex-col sm:flex-row sm:justify-between"
    >
      <Column>
        <Logo isFooter />
        <AboutText />
      </Column>
      <Column>
        <Items items={items[0]} />
      </Column>
      <Column>
        <Map alt={items[1][2].alt} src={items[1][2].src} />
        <div className="flex flex-col text-slate-800 text-[18px]" dir="ltr">
          <div className="flex">
            <PhoneIcon className="text-orange-700 min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px]" />
            <span className="ml-[5px] mb-[5px]">{items[1][0]}</span>
          </div>
          <div className="flex">
            <AtSymbolIcon className="text-orange-700 min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px]" />
            <span className="ml-[5px]">{items[1][1]}</span>
          </div>
        </div>
      </Column>
    </footer>
  );
};

export default Footer;
