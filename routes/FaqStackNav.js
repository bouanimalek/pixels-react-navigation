import { createStackNavigator } from "react-navigation-stack";
import Colors from "../styles/Colors";
import Faq from "../screens/Faq";

const screens = {
  Home: {
    screen: Faq,
    navigationOptions: {
      title: "FAQ",
      // headerStyle: {
      //   backgroundColor: Colors.lightBrown,
      // },
    },
  },
};

const defaultNavigationOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.lightBrown,
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 25,
    },
  },
};
const FaqStackNav = createStackNavigator(screens, defaultNavigationOptions);

export default FaqStackNav;
