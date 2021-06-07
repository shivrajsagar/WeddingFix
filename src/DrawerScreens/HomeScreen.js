import React, { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width } = Dimensions.get("screen");
class HomeScreen extends Component {
  state = {
    credit: "",
    Use_credit: "",
    Balance_credit: "",
  };

  async componentDidMount() {
    const card_Credit = await AsyncStorage.getItem("card_Credit");
    const card_Use_credit = await AsyncStorage.getItem("card_Use_credit");
    const card_Balance_credit = await AsyncStorage.getItem("card_Balance_credit");
    this.setState({ credit: card_Credit });
    this.setState({ Use_credit: card_Use_credit });
    this.setState({ Balance_credit: card_Balance_credit });
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ backgroundColor: "#fff", flex: 1, width: width }}>
          <View style={{ justifyContent: "space-evenly" }}>
            <Card containerStyle={styles.card}>
              <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                <Icon name="message-circle" size={40} color="#fff" />
                <Text style={{ color: "#fff", fontSize: 25, marginLeft: 120 }}>{this.state.credit}</Text>
              </View>
              <Card.Title style={{ color: "#fff", fontSize: 20, justifyContent: "flex-start", marginTop: 20 }}>
                CREDIT
              </Card.Title>
            </Card>
            <Card containerStyle={styles.card1}>
              <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                <Icon name="check-circle" family="entypo" size={40} color="#fff" />
                <Text style={{ color: "#fff", fontSize: 25, alignSelf: "center", marginLeft: 120 }}>
                  {this.state.Use_credit}
                </Text>
              </View>
              <Card.Title style={{ color: "#fff", fontSize: 20, marginTop: 20 }}>USE CREDIT </Card.Title>
            </Card>
          </View>
          <View style={{ justifyContent: "space-evenly" }}>
            <Card containerStyle={styles.card2}>
              <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                <Icon name="inbox" size={40} color="#fff" />
                <Text style={{ color: "#fff", fontSize: 25, marginLeft: 120 }}>{this.state.Balance_credit}</Text>
              </View>
              <Card.Title style={{ color: "#fff", fontSize: 20, marginTop: 20 }}>BALANCE</Card.Title>
            </Card>
            <Card containerStyle={styles.card3}>
              <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                <Icon name="heart" size={40} color="#fff" />
                <Text style={{ color: "#fff", fontSize: 25, marginLeft: 120 }}>1</Text>
              </View>
              <Card.Title size={40} style={{ color: "#fff", fontSize: 20, marginTop: 20 }}>
                FAVORITE
              </Card.Title>
            </Card>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
const styles = StyleSheet.create({
  card: {
    height: 120,
    width: 350,
    backgroundColor: "#23709e",
    alignSelf: "center",
    justifyContent: "center",
  },
  card1: {
    height: 120,
    width: 350,
    backgroundColor: "#1fae66",
    alignSelf: "center",
    justifyContent: "center",
  },
  card2: {
    height: 120,
    width: 350,
    backgroundColor: "#f89c2c",
    alignSelf: "center",
    justifyContent: "center",
  },
  card3: {
    height: 120,
    width: 350,
    backgroundColor: "#f85d2c",
    alignSelf: "center",
    justifyContent: "center",
  },
});
