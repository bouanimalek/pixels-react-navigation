import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Portfolio = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Photo");
  };
  return (
    <View style={styles.container}>
      <Text>Portfolio</Text>
      <Button title="Vers Photo" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Portfolio;
