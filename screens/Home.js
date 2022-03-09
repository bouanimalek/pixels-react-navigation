import React, { useState, useEffect } from "react";
import { FlatList, View, Modal, StyleSheet, Text } from "react-native";
import { DrawerActions } from "react-navigation-drawer";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MaterialIcons } from "@expo/vector-icons";
import PressableItems from "../components/PressableItems";
import MaterialIconsHeader from "../components/MaterialIconsHeader";
import { globalStyles } from "../styles/AppStyles";
import Colors from "../styles/Colors";

const Home = ({ navigation }) => {
  useEffect(() => {
    navigation.setParams({ handleModal: handleSettingsModal });
  }, [handleSettingsModal]);

  const [modalVisible, setModalVisible] = useState(false);
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

  const handleSettingsModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalBody}>
          <MaterialIcons
            name="close"
            size={24}
            style={styles.modalClose}
            onPress={handleSettingsModal}
          />
        </View>
      </Modal>
      <FlatList
        data={selectedCategories}
        renderItem={renderProfiles}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

Home.navigationOptions = ({ navigation }) => {
  const handleModal = navigation.getParam("handleModal");
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
        <Item title="Réglage" iconName="settings" onPress={handleModal} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  modalBody: {
    flex: 1,
    backgroundColor: Colors.gwhite,
    marginVertical: 60,
    padding: 20,
    alignSelf: "center",
    borderRadius: 10,
    width: "90%",
  },
  modalClose: {
    alignSelf: "flex-end",
  },
});

export default Home;
