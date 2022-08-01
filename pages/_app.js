import "../index.css";
import Navigation from "../components/Navigation/Navigation";
import navItems from "../data/NavItems.json";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation items={navItems} />
      <BottomNavigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
