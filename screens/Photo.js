import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Photo = ({ navigation }) => {
  const handlePress = () => {
    navigation.popToTop();
  };
  return (
    <View style={styles.container}>
      <Text>Photo</Text>
      <Button title="Vers Home" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgreen",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Photo;
