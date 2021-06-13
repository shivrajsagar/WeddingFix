import React from "react";

import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Avatar } from "react-native-elements";

const { width, height } = Dimensions.get("screen");

const CardComponent = ({ item, navigation }) => {
  const { title, icon, route } = item;
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(route)}
    >
      <Avatar
        route
        size="medium"
        icon={{ name: icon, color: "#900" }}
        containerStyle={{
          backgroundColor: "#ff8080",
          borderRadius: 100,
        }}
      />
      <Text
        style={{
          color: "red",
          fontSize: 17,
          textAlign: "left",
          fontWeight: "700",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: width * 0.35,
    width: width * 0.35,
    backgroundColor: "#fff",
    flex: 1,
    margin: 10,
    alignItems: "flex-start",
    borderRadius: 10,
    padding: 8,
    justifyContent: "space-around",
  },
});

export default CardComponent;
