import React, { useState } from "react";

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
} from "react-native";

const ChatMessage = ({ route }) => {
  const { Name } = route.params;
  const [mobileNumber, setMobileNumber] = useState("");
  const [whatsAppMsg, setWhatsAppMsg] = useState("Hello " + Name);

  const initiateWhatsAppSMS = () => {
    if (mobileNumber.length != 10) {
      alert("Please insert correct contact number");
      return;
    }

    let url =
      "whatsapp://send?text=" + whatsAppMsg + "&phone=91" + mobileNumber;
    Linking.openURL(url)
      .then((data) => {
        console.log("WhatsApp Opened");
      })
      .catch(() => {
        alert("Make sure Whatsapp installed on your device");
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Example to Send WhatsApp Message from React Native App
        </Text>
        <Text style={styles.titleTextsmall}>Enter WhatsApp Number</Text>
        <TextInput
          value={mobileNumber}
          onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)}
          placeholder={"Enter WhatsApp Number"}
          keyboardType="numeric"
          maxLength={10}
          style={styles.textInput}
        />
        <Text style={styles.titleTextsmall}>WhatsApp Message</Text>
        <TextInput
          value={whatsAppMsg}
          onChangeText={(whatsAppMsg) => setWhatsAppMsg(whatsAppMsg)}
          placeholder={"WhatsApp Message"}
          style={styles.textInput}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={initiateWhatsAppSMS}
        >
          <Text style={styles.buttonTextStyle}>Send WhatsApp Message</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: "center",
    marginTop: 15,
    padding: 10,
    backgroundColor: "#8ad24e",
  },
  buttonTextStyle: {
    color: "#fff",
    textAlign: "center",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 10,
  },
});
