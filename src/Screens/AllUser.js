import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  Dimensions,
} from "react-native";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width } = Dimensions.get("screen");

class AllUser extends Component {
  state = {
    pokeList: {},
    loading: true,
  };

  async componentDidMount() {
    const { ID } = this.props.route.params;
    const user_id = await AsyncStorage.getItem("user_id");
    try {
      const pokemonApiCall = await fetch(
        `http://sathimubark.com/api/wedding/read/read_dashboard_data.php?uid=${ID}`
      );
      const pokemon = await pokemonApiCall.json();
      console.log(pokemon);
      this.setState({ pokeList: pokemon, loading: false });
    } catch (err) {
      console.log("Error fetching data-----------", err);
    }
  }
  render() {
    const { navigation, route } = this.props;
    const { pokeList, loading } = this.state;
    const { ID } = route.params;

    return (
      <ScrollView style={{ flex: 1 }}>
        <>
          {loading == true ? (
            loading
          ) : (
            <View style={styles.container}>
              {/* <View>
              <Image
                style={styles.avatar}
                source={{ uri: `http://brijesh.expresscab.in/wedding/${pokeList.pick_url}` }}
              />
            </View> */}
              <View>
                {isNaN(pokeList.pick_url) ? (
                  <Image
                    style={styles.avatar}
                    source={{
                      uri: `http://sathimubark.com/api/wedding/uploads/userimage/${pokeList.pick_url}`,
                    }}
                    resizeMode="contain"
                  />
                ) : (
                  <Image
                    style={styles.avatar}
                    source={{
                      uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
                    }}
                  />
                )}
              </View>
              <View style={{ marginTop: 250 }}>
                {pokeList.status == 0 ? (
                  <Text
                    style={{
                      alignSelf: "center",
                      fontSize: 15,
                      color: "#fff",
                      marginTop: 10,
                    }}
                  >
                    Status: INACTIVE
                  </Text>
                ) : (
                  <Text
                    style={{
                      alignSelf: "center",
                      fontSize: 15,
                      color: "orange",
                      marginTop: 10,
                      fontWeight: "bold",
                    }}
                  >
                    Status: ACTIVE
                  </Text>
                )}
                {/* <Text style={{ alignSelf: "center", fontSize: 15, color: "#fff", marginTop: 10 }}>
                Customer ID: {pokeList.customer_id}
              </Text> */}
              </View>
              {/* <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 20, width: width }}>
              <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 20, color: "#fff" }}>ABOUT</Text>
            </View> */}
              <View style={styles.body}>
                <View style={{ padding: 15 }}>
                  <View style={styles.userdetail}>
                    <Text style={styles.textstyle}>User Name :</Text>
                    <Text style={styles.textstyle1}>{pokeList.User_name}</Text>
                  </View>
                  <View style={styles.userdetail}>
                    <Text style={styles.textstyle}>Email :</Text>
                    <Text style={styles.textstyle1}>XXXXXXXXXXX.com</Text>
                  </View>
                  <View style={styles.userdetail}>
                    <Text style={styles.textstyle}>City :</Text>
                    <Text style={styles.textstyle1}>{pokeList.city}</Text>
                  </View>
                  <View style={styles.userdetail}>
                    <Text style={styles.textstyle}>Pincode :</Text>
                    <Text style={styles.textstyle1}>{pokeList.pin_code}</Text>
                  </View>
                  <View style={styles.userdetail}>
                    <Text style={styles.textstyle}>Birthday :</Text>
                    <Text style={styles.textstyle1}>{pokeList.DOB}</Text>
                  </View>
                  <View style={styles.userdetail}>
                    <Text style={styles.textstyle}>Gender :</Text>
                    <Text style={styles.textstyle1}>{pokeList.gender}</Text>
                  </View>
                  <View style={styles.userdetail}>
                    <Text style={styles.textstyle}>Marital Status :</Text>
                    <Text style={styles.textstyle1}>
                      {pokeList.marital_Status}
                    </Text>
                  </View>
                  <View style={styles.userdetail}>
                    <Text style={styles.textstyle}>Phone :</Text>
                    <Text style={styles.textstyle1}>9XXXXXXXXX</Text>
                  </View>
                  <View style={styles.userdetail}>
                    <Text style={styles.textstyle}>Height :</Text>
                    <Text style={styles.textstyle1}>
                      {pokeList.height} (mts)
                    </Text>
                  </View>
                  <View style={styles.userdetail}>
                    <Text style={styles.textstyle}>Weight :</Text>
                    <Text style={styles.textstyle1}>
                      {pokeList.weight} (kg)
                    </Text>
                  </View>
                  <View style={styles.userdetail}>
                    <Text style={styles.textstyle}>Mangali :</Text>
                    <Text style={styles.textstyle1}>{pokeList.mangali}</Text>
                  </View>
                  <View style={styles.userdetail}>
                    <Text style={styles.textstyle}>Mother Tonque :</Text>
                    <Text style={styles.textstyle1}>
                      {pokeList.mother_Tonque}
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "flex-start" }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginLeft: 20,
                    color: "#fff",
                  }}
                >
                  JOB PROFILE
                </Text>
              </View>
              <View style={styles.body}>
                <View style={{ padding: 15 }}>
                  <View style={styles.userdetail}>
                    <Text style={styles.textstyle}>Work Status :</Text>
                    <Text style={styles.textstyle1}>
                      {pokeList.current_Work_Status}
                    </Text>
                  </View>
                  <View style={styles.userdetail}>
                    <Text style={styles.textstyle}>
                      Salaried / Self Employee :
                    </Text>
                    <Text style={styles.textstyle1}>
                      {pokeList.salary_Status_Criteria}
                    </Text>
                  </View>
                  <View style={styles.userdetail}>
                    <Text style={styles.textstyle}>Salary (Rs.) :</Text>
                    <Text style={styles.textstyle1}>{pokeList.Sallary}</Text>
                  </View>
                </View>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "flex-start" }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginLeft: 20,
                    color: "#fff",
                  }}
                >
                  EDUCATION
                </Text>
              </View>
              <View style={styles.body}>
                <View style={{ padding: 15 }}>
                  <View style={styles.userdetail}>
                    <Text style={styles.textstyle}>Education :</Text>
                    <Text style={styles.textstyle1}>
                      {pokeList.education_Qualification}
                    </Text>
                  </View>
                </View>
              </View>
              <Button
                title="Send Request"
                buttonStyle={styles.button1}
                onPress={() => navigation.navigate("All User")}
              />
            </View>
          )}
        </>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#900",
    flex: 1,
    width: width,
  },
  header: {
    backgroundColor: "#900",
  },
  avatar: {
    width: 230,
    height: 230,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 20,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    flex: 2,
  },
  bodyContent: {
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  btnStyle: {
    width: 120,
    backgroundColor: "orange",
    justifyContent: "center",
    alignSelf: "center",
  },
  userdetail: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10,
  },
  textstyle: {
    fontSize: 16,
    width: 150,
    color: "#fff",
  },
  textstyle1: {
    fontSize: 16,
    color: "#fff",
  },
  button1: {
    width: 130,
    backgroundColor: "orange",
    justifyContent: "center",

    alignSelf: "center",
    marginBottom: 10,
  },
});
export default AllUser;
