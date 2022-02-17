import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import Faq from "../screens/Faq";
import StackNav from "./HomeStackNav";

const RouteConfig = {
  Home: {
    screen: StackNav,
  },
  Faq: {
    screen: Faq,
  },
};

const MainNavigator = createDrawerNavigator(RouteConfig);

export default createAppContainer(MainNavigator);
