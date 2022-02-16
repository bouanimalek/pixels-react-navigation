import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Portfolio from "../screens/Portfolio";
import Photo from "../screens/Photo";
import Colors from "../styles/Colors";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Accueil",
      headerStyle: {
        backgroundColor: Colors.lightBrown,
      },
    },
  },
  Portfolio: {
    screen: Portfolio,
    navigationOptions: {
      title: "Profil",
      headerStyle: {
        backgroundColor: Colors.lightBrown,
      },
    },
  },
  Photo: {
    screen: Photo,
  },
};

const StackNav = createStackNavigator(screens);

export default createAppContainer(StackNav);
