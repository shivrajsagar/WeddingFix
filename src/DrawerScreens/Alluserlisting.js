import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width, height } = Dimensions.get("screen");

class AlluserlistingStack extends Component {
  state = {
    UserList: [],
    loading: true,
  };

  async componentDidMount() {
    const user_id = await AsyncStorage.getItem("user_id");

    try {
      const pokemonApiCall = await fetch(
        "http://sathimubark.com/api/wedding/read/read_all_user.php"
      );
      const AllUserList = await pokemonApiCall.json();

      this.setState({ UserList: AllUserList.records, loading: false });
    } catch (err) {
      console.log("Error fetching data ghh-----------", err);
    }
  }
  render() {
    const { navigation } = this.props;
    const { UserList } = this.state;
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <>
          <View style={styles.container}>
            {UserList.map((item) => {
              return (
                <View style={styles.card}>
                  <Image
                    style={{
                      height: 100,
                      width: 100,
                      backgroundColor: "green",
                      alignItems: "center",
                    }}
                  />
                  <View style={styles.cardview}>
                    <Text style={styles.cardtext}>Name:</Text>
                    <Text style={styles.cardtext}>{item.name}</Text>
                  </View>
                  <View style={styles.cardview}>
                    <Text style={styles.cardtext}>Materail Status:</Text>
                    <Text style={styles.cardtext}>{item.maritalStatus}</Text>
                  </View>
                  <View style={styles.cardview}>
                    <Text style={styles.cardtext}>Age:</Text>
                    <Text style={styles.cardtext}>{item.age}</Text>
                  </View>
                  <View style={styles.cardview}>
                    <Text style={styles.cardtext}>Status:</Text>
                    <Text style={styles.cardtext}>{item.status}</Text>
                  </View>
                  <Button
                    title="View Profile"
                    buttonStyle={styles.button1}
                    onPress={() =>
                      navigation.navigate("All User", {
                        ID: item.id,
                      })
                    }
                  />
                </View>
              );
            })}
          </View>
        </>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textstyle: {
    color: "#800",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 20,
  },
  button: {
    width: 120,
    backgroundColor: "#900",
    justifyContent: "center",
    alignSelf: "center",
    color: "red",
    marginTop: 50,
  },
  button1: {
    width: 120,
    backgroundColor: "orange",
    justifyContent: "center",
    alignSelf: "center",
  },
  card: {
    marginTop: 10,
    justifyContent: "flex-start",
    padding: 5,
    height: 300,
    width: width / 1.05,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#900",
    borderRadius: 10,
  },
  cardview: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardtext: {
    color: "#fff",
    fontSize: 20,
    justifyContent: "flex-start",
  },
});
export default AlluserlistingStack;
