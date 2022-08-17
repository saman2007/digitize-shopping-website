import "../index.css";
import Navigation from "../components/Navigation/Navigation";
import navItems from "../data/NavItems.json";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";
import { Provider } from "react-redux";
import store from "../store/ReduxStore";
import Spacer from "../components/Spacer/Spacer";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navigation items={navItems} />
      <Spacer />
      <BottomNavigation />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
