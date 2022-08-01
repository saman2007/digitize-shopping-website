import BottomNavigationItems from "./BottomNavigationItems";

const BottomNavigation = () => {
  return (
    <nav className="fixed sm:hidden bottom-0 left-0 right-0 bg-stone-50 shadow-[0px_-4px_8px_rgba(0,0,0,0.1)] h-[70px] rounded-t-[10px] flex justify-around items-center">
      <BottomNavigationItems />
    </nav>
  );
};

export default BottomNavigation;
