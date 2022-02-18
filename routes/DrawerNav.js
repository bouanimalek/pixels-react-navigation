import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import StackNav from "./HomeStackNav";
import FaqStackNav from "./FaqStackNav";
import Colors from "../styles/Colors";

const RouteConfig = {
  Home: {
    screen: StackNav,
    navigationOptions: {
      drawerLabel: "Accueil",
    },
  },
  Faq: {
    screen: FaqStackNav,
    navigationOptions: {
      drawerLabel: "FAQ",
    },
  },
};

const DrawerNavigatorConfig = {
  hideStatusBar: true,
  drawerBackgroundColor: "grey",
  drawerWidth: 110,
  drawerType: "slide",
  contentOptions: {
    activeTintColor: Colors.clicked,
    inactiveTintColor: Colors.white,
    labelStyle: {
      fontSize: 19,
    },
  },
};
const MainNavigator = createDrawerNavigator(RouteConfig, DrawerNavigatorConfig);

export default createAppContainer(MainNavigator);
