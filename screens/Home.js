import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  const handlePress = () => {
    // navigation.navigate("Portfolio");
    // navigation.push("Home");
    navigation.navigate("Portfolio");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button title="Vers Portfolio" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "InriaSans_700Bold_Italic",
    fontSize: 25,
  },
});

export default Home;
