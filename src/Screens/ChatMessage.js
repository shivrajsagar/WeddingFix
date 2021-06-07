import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { Button } from "react-native-elements";
import { GiftedChat } from "react-native-gifted-chat";

const { width } = Dimensions.get("screen");
const ChatMessage = ({ navigation }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hi, How to help you",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      style={styles.container}
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
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
    backgroundColor: "green",
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

export default ChatMessage;
