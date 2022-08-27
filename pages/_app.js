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
import ContextContainer from "../store/Context";
import Backdrop from "../components/BackDrop/Backdrop";

function MyApp({ Component, pageProps }) {
  return (
    <ContextContainer>
      <Provider store={store}>
        <Backdrop />
        <Navigation items={navItems} />
        <Spacer />
        <Component {...pageProps} />
        <Footer items={footerItems} />
        <SpacerBottom />
        <BottomNavigation />
      </Provider>
    </ContextContainer>
  );
}

export default MyApp;
