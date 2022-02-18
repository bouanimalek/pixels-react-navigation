import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/AppStyles";

const Photo = ({ navigation }) => {
  const url = navigation.getParam("url");
  const title = navigation.getParam("title");
  const photoDes = navigation.getParam("photoDesc");
  return (
    <ScrollView style={globalStyles.container}>
      <Image style={styles.selectedImage} source={{ uri: url }} />
      <View style={styles.photoDescription}>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={styles.textDescription}>{photoDes}</Text>
        <Text style={styles.textDescription}>{photoDes}</Text>
      </View>
    </ScrollView>
  );
};
Photo.navigationOptions = ({ navigation }) => {
  const photoTitle = navigation.getParam("title");
  return {
    headerTitle: photoTitle.toUpperCase(),
  };
};
const styles = StyleSheet.create({
  selectedImage: {
    width: "100%",
    height: 300,
  },
  photoDescription: {
    padding: 15,
    fontSize: 25,
    fontFamily: "InriaSans_400Regular",
  },
  textDescription: {
    fontFamily: "InriaSans_400Regular",
    fontSize: 20,
    padding: 9,
  },
});

export default Photo;
