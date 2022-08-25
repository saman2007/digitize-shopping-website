import "../index.css";
import Navigation from "../components/Navigation/Navigation";
import navItems from "../data/NavItems.json";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";
import { Provider } from "react-redux";
import store from "../store/ReduxStore";
import Spacer from "../components/Spacer/Spacer";
import SpacerBottom from "../components/Spacer/SpacerBottom";
import Footer from "../components/Footer/Footer";
import footerItems from "../data/FooterItems.json";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navigation items={navItems} />
      <Spacer />
      <Component {...pageProps} />
      <Footer items={footerItems} />
      <SpacerBottom />
      <BottomNavigation />
    </Provider>
  );
}

export default MyApp;
