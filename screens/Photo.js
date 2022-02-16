import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect } from "react";

const Photo = ({ navigation }) => {
  useEffect(() => {
    console.log("Photo est monté");
    return () => {
      console.log("Photo est démonté");
    };
  }, []);
  const handlePress = () => {
    navigation.pop();
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
