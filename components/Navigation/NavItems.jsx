import Logo from "./Logo";
import LogoMobile from "./LogoMobile";
import NavItem from "./NavItem";

const NavItems = ({ items }) => {
  return (
    <ul className="h-full flex items-center flex-row-reverse">
      <Logo />
      <LogoMobile />
      {items.map((data, index) => (
        <NavItem {...data} key={index} index={index} />
      ))}
    </ul>
  );
};

export default NavItems;
