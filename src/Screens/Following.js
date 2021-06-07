import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Following = () => {
  return (
    <View style={styles.container}>
      <Text>Following Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Following;
