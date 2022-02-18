import { FlatList, View } from "react-native";
import { DrawerActions } from "react-navigation-drawer";
import PressableItems from "../components/PressableItems";
import { globalStyles } from "../styles/AppStyles";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MaterialIconsHeader from "../components/MaterialIconsHeader";
import { DATA } from "../data/userData";

const Home = ({ navigation }) => {
  const renderProfiles = ({ item }) => {
    return (
      <PressableItems
        item={item}
        handleNavigate={() => navigation.navigate("Portfolio", item)}
      />
    );
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={DATA}
        renderItem={renderProfiles}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

Home.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
        <Item
          title="menu"
          iconName="menu"
          // navigation.toggleDrawer()
          // navigation.openDrawer()
          // onPress={() => navigation.toggleDrawer()}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </HeaderButtons>
    ),
  };
};

export default Home;
