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
import { Alert } from "react-native";

class AlluserlistingStack extends Component {
  state = {
    UserList: [],
    loading: false,
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
      console.log("Error fetching all user list-----------", err);
    }
  }
  render() {
    const { navigation } = this.props;
    const { UserList } = this.state;
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <>
          <View style={styles.container}>
            {UserList.map((item, index) => {
              return (
                <View style={styles.card} key={index.toString()}>
                  <View style={{ flexDirection: "row" }}>
                    {isNaN(item.image) ? (
                      <Image
                        style={styles.image}
                        source={{
                          uri: `http://sathimubark.com/api/wedding/uploads/userimage/${item.image}`,
                        }}
                        //resizeMode="center"
                      />
                    ) : (
                      <Image
                        style={styles.image}
                        source={{
                          uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
                        }}
                      />
                    )}
                    <View style={styles.viewbutton}>
                      <Button
                        title="View Profile"
                        buttonStyle={styles.button1}
                        onPress={() =>
                          navigation.navigate("All User", {
                            ID: item.id,
                          })
                        }
                      />
                      <Button
                        title="Send Request"
                        buttonStyle={styles.button2}
                        onPress={() =>
                          Alert.alert("Are you sure to send request ?", "", [
                            {
                              text: "Cancel",
                              onPress: () => console.log("Cancel Pressed"),
                              style: "cancel",
                              color: "#900",
                            },
                            {
                              text: "Send Request",
                              onPress: () => console.log("Send Request"),
                              color: "#900",
                            },
                          ])
                        }
                      />
                    </View>
                  </View>
                  <View style={{ marginTop: 20 }}>
                    <View style={styles.cardview}>
                      <Text style={styles.cardtext}>Name: </Text>
                      <Text style={styles.cardtext}>{item.name}</Text>
                    </View>
                    <View style={styles.cardview}>
                      <Text style={styles.cardtext}>Materail Status: </Text>
                      <Text style={styles.cardtext}>{item.maritalStatus}</Text>
                    </View>
                    <View style={styles.cardview}>
                      <Text style={styles.cardtext}>DOB: </Text>
                      <Text style={styles.cardtext}>{item.age}</Text>
                    </View>
                    <View style={styles.cardview}>
                      <Text style={styles.cardtext}>Cast: </Text>
                      <Text style={styles.cardtext}>{item.cast}</Text>
                    </View>
                    <View style={styles.cardview}>
                      <Text
                        style={[
                          styles.cardtext,
                          { textAlign: "left", flex: 1, flexGrow: 1 },
                        ]}
                      >
                        Education:{" "}
                      </Text>
                      <Text
                        style={[
                          styles.cardtext,
                          { textAlign: "right", flex: 1, flexGrow: 1 },
                        ]}
                      >
                        {item.education}
                      </Text>
                    </View>
                    <View style={styles.cardview}>
                      <Text style={styles.cardtext}>Work Status: </Text>
                      <Text style={styles.cardtext}>{item.workStatus}</Text>
                    </View>
                    <View style={styles.cardview}>
                      <Text style={styles.cardtext}>City: </Text>
                      <Text style={styles.cardtext}>{item.city}</Text>
                    </View>
                  </View>
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
    width: 130,
    backgroundColor: "orange",
    justifyContent: "center",
    alignSelf: "center",
  },
  card: {
    flex: 1,
    marginTop: 10,
    justifyContent: "flex-start",
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#900",
    borderRadius: 10,
  },
  cardview: {
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    //alignItems: "center",
  },
  cardtext: {
    color: "#fff",
    fontSize: 20,
    textAlign: "justify",
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 30,
    backgroundColor: "#ffee",
    marginLeft: 5,
    marginTop: 5,
  },
  viewbutton: {
    justifyContent: "space-around",
    marginTop: 20,
    marginLeft: 50,
  },
  button2: {
    width: 130,
    backgroundColor: "orange",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
});
export default AlluserlistingStack;
