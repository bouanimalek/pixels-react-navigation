import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import StackNav from "./HomeStackNav";
import FaqStackNav from "./FaqStackNav";

const RouteConfig = {
  Home: {
    screen: StackNav,
  },
  Faq: {
    screen: FaqStackNav,
  },
};

const DrawerNavigatorConfig = {
  hideStatusBar: true,
  drawerBackgroundColor: "grey",
  drawerWidth: 80,
};
const MainNavigator = createDrawerNavigator(RouteConfig, DrawerNavigatorConfig);

export default createAppContainer(MainNavigator);
