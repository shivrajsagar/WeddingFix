import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Followers = () => {
  return (
    <View style={styles.container}>
      <Text>Followers Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Followers;
