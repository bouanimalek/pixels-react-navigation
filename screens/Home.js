import { FlatList, View } from "react-native";
import { DrawerActions } from "react-navigation-drawer";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import PressableItems from "../components/PressableItems";
import MaterialIconsHeader from "../components/MaterialIconsHeader";
import { globalStyles } from "../styles/AppStyles";
import NoData from "../components/NoData";

const Home = ({ navigation }) => {
  const selectedCategories = useSelector(
    (state) => state.users.selectedCategories
  );

  const renderProfiles = ({ item }) => {
    return (
      <PressableItems
        item={item}
        handleNavigate={() => navigation.navigate("Portfolio", item)}
      />
    );
  };
  if (selectedCategories.length === 0) {
    //message
    return <NoData>Pas d'utilisateur à afficher </NoData>;
  } else {
    return (
      <View style={globalStyles.container}>
        <FlatList
          data={selectedCategories}
          renderItem={renderProfiles}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
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
