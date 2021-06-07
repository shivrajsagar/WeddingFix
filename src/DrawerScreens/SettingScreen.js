import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Dimensions,
} from "react-native";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width } = Dimensions.get("screen");

class SettingScreen extends Component {
  state = {
    pokeList: {},
    loading: false,
  };

  async componentDidMount() {
    const user_id = await AsyncStorage.getItem("user_id");
    console.log(user_id + " profile");
    try {
      const pokemonApiCall = await fetch(
        `http://sathimubark.com/api/wedding/read/read_dashboard_data.php?uid=${user_id}`
      );
      const pokemon = await pokemonApiCall.json();
      const card_Credit = pokemon.Credit;
      const card_Use_credit = pokemon.Use_credit;
      const card_Balance_credit = pokemon.Balance_credit;
      AsyncStorage.setItem("card_Credit", card_Credit);
      AsyncStorage.setItem("card_Use_credit", card_Use_credit);
      AsyncStorage.setItem("card_Balance_credit", card_Balance_credit);

      this.setState({ pokeList: pokemon, loading: true });
    } catch (err) {
      console.log("Error fetching data-----------", err);
    }
  }
  render() {
    const { navigation } = this.props;
    const { pokeList } = this.state;
    // global.image = `http://sathimubark.com/api/wedding/uploads/userimage/${pokeList.pick_url}`;
    // global.name = pokeList.User_name;
    return (
      <ScrollView style={{ flex: 1 }}>
        <>
          <View style={styles.container}>
            <View>
              {!pokeList.pick_url == "" ? (
                <Image
                  style={styles.avatar}
                  source={{
                    uri: `http://sathimubark.com/api/wedding/uploads/userimage/${pokeList.pick_url}`,
                  }}
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
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 15,
                  color: "#fff",
                  marginTop: 10,
                }}
              >
                Customer ID: {pokeList.customer_id}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 20,
                width: width / 1.05,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginLeft: 20,
                  color: "#fff",
                }}
              >
                ABOUT
              </Text>
              <Button
                title="Edit"
                buttonStyle={styles.btnStyle}
                onPress={() =>
                  navigation.navigate("Profile Update", {
                    name1: pokeList.User_name,
                    email1: pokeList.email,
                    phonenumber1: pokeList.mobile,
                    customerid1: pokeList.customer_id,
                    marital_Status1: pokeList.marital_Status,
                    pin_code1: pokeList.pin_code,
                    city1: pokeList.city,
                    DOB1: pokeList.DOB,
                    height1: pokeList.height,
                    weight1: pokeList.weight,
                    mother_Tonque1: pokeList.mother_Tonque,
                    current_Work_Status1: pokeList.current_Work_Status,
                    salary_Status_Criteria1: pokeList.salary_Status_Criteria,
                    Sallary1: pokeList.Sallary,
                    education_Qualification1: pokeList.education_Qualification,
                    gender1: pokeList.gender,
                    mangali1: pokeList.mangali,
                    father_Name1: pokeList.father_Name,
                    mother_Name1: pokeList.mother_Name,
                    caste1: pokeList.caste,
                    nick_name1: pokeList.nick_name,
                    user_Password1: pokeList.user_Password,
                    pick_url1: pokeList.pick_url,
                  })
                }
              />
            </View>
            <View style={styles.body}>
              <View style={{ padding: 15 }}>
                <View style={styles.userdetail}>
                  <Text style={styles.textstyle}>User Name :</Text>
                  <Text style={styles.textstyle1}>{pokeList.User_name}</Text>
                </View>
                <View style={styles.userdetail}>
                  <Text style={styles.textstyle}>Email :</Text>
                  <Text style={styles.textstyle1}>{pokeList.email}</Text>
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
                  <Text style={styles.textstyle1}>{pokeList.mobile}</Text>
                </View>
                <View style={styles.userdetail}>
                  <Text style={styles.textstyle}>Height :</Text>
                  <Text style={styles.textstyle1}>{pokeList.height} (mts)</Text>
                </View>
                <View style={styles.userdetail}>
                  <Text style={styles.textstyle}>Weight :</Text>
                  <Text style={styles.textstyle1}>{pokeList.weight} (kg)</Text>
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
          </View>
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

    width: 210,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  btnStyle: {
    backgroundColor: "orange",
    justifyContent: "flex-start",
    marginLeft: 210,
  },
  userdetail: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10,
  },
  textstyle: {
    fontSize: 18,
    width: 150,
    color: "#fff",
  },
  textstyle1: {
    fontSize: 18,
    color: "#fff",
  },
});
export default SettingScreen;
