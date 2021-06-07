import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Alert,
  Dimensions,
} from "react-native";
import { Button } from "react-native-elements";
const { width } = Dimensions.get("screen");
const Chat = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.view1}>
          <Image
            style={styles.image}
            source={require("../../Image/wedding.png")}
          />

          <Text style={styles.text}>Rahul</Text>
          <Button
            title="Chat"
            buttonStyle={styles.button}
            onPress={() => navigation.navigate("Message")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 1.02,
    marginTop: 5,
    flexDirection: "row",
    backgroundColor: "#900",
    padding: 5,
    marginLeft: 5,
    margin: 5,
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    width: width / 3,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: "#ffee",
  },
  text: {
    fontSize: 25,
    padding: 5,
    color: "#fff",
    width: 220,
  },
  button: {
    backgroundColor: "green",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
});

export default Chat;
