import React from "react";
import { View, Image, ScrollView, StyleSheet, Text } from "react-native";
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";
import { globalStyles } from "../styles/AppStyles";
import Colors from "../styles/Colors";
import MaterialIconsHeader from "../components/MaterialIconsHeader";
import TouchableImage from "../components/TouchableImage";

// const Logo = () => {
//   return (
//     <Image
//       source={require("../assets/images/camera.png")}
//       style={{ width: 30, height: 30 }}
//     />
//   );
// };
const Portfolio = ({ navigation }) => {
  const favColor = navigation.getParam("favColor");
  const name = navigation.getParam("name");
  const profilImg = navigation.getParam("img");
  const desc = navigation.getParam("desc");
  const photoArray = navigation.getParam("photos");

  const selectPhoto = (photo) => {
    navigation.navigate("Photo", photo);
  };

  return (
    <ScrollView style={globalStyles.container}>
      <View style={{ backgroundColor: favColor, ...styles.profilInfos }}>
        <Image style={styles.smallprofilImg} source={{ uri: profilImg }} />
        <Text style={styles.profilName}>{name}</Text>
      </View>
      <View style={styles.profilDescription}>
        <Text style={styles.titleBioText}>Bio: </Text>
        <Text style={styles.textBio}>{desc}</Text>
      </View>
      <View>
        {photoArray.map((photo) => (
          <TouchableImage
            key={photo.id}
            imgUrl={photo.url}
            imgTitle={photo.title}
            onSelectPhoto={() => selectPhoto(photo)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

Portfolio.navigationOptions = (navigationData) => {
  const name = navigationData.navigation.getParam("name");
  const favColor = navigationData.navigation.getParam("favColor");

  return {
    headerTitle: `Profil de ${name}`,
    headerStyle: {
      backgroundColor: favColor,
    },
    headerTintColor: Colors.white,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
        <Item
          title="info"
          iconName="info-outline"
          onPress={() => alert("Portfolio de " + name)}
        />
        <Item
          title="infoTwo"
          iconName="info"
          onPress={() => alert("Portfolio de " + name)}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  profilInfos: {
    alignItems: "center",
    padding: 10,
  },
  smallprofilImg: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    margin: 9,
    borderWidth: 6,
    borderColor: Colors.white,
  },
  profilName: {
    fontFamily: "InriaSans_700Bold",
    color: Colors.white,
    fontSize: 25,
  },
  profilDescription: {
    backgroundColor: Colors.gwhite,
    padding: 15,
    fontSize: 25,
    fontFamily: "InriaSans_400Regular",
  },
  titleBioText: {
    fontSize: 25,
    padding: 9,
    fontFamily: "InriaSans_700Bold",
  },
  textBio: {
    fontFamily: "InriaSans_400Regular",
    fontSize: 20,
    padding: 9,
  },
});
export default Portfolio;
