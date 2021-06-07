import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Button } from "react-native-elements";
import axios from "axios";
import Icon from "react-native-vector-icons/Feather";
const { width, height } = Dimensions.get("screen");

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      country: "Select City",
      gender: "Select Gender",
      materialstatus: "Select Material Status",
      Agemin: "Age (min)",
      Agemax: "Age (max)",
      cast: "Select Caste",
      manglik: "Select Manglik",
      item: [],
      data: [],
    };
  }
  //url = `http://sathimubark.com/api/wedding/read/getfilterdata.php?city=${country}&gender=${gender}&material=${materialstatus}&cast=${cast}&manglik=${manglik}`;
  onSubmit = async () => {
    const {
      country,
      gender,
      materialstatus,
      Agemin,
      Agemax,
      cast,
      manglik,
      data,
    } = this.state;
    console.log(
      country,
      gender,
      materialstatus,
      Agemin,
      Agemax,
      cast,
      manglik,
      data
    );
    // var config = {
    //   method: "get",
    //   url: `http://sathimubark.com/api/wedding/read/getfilterdata.php?city=${country}&gender=${gender}&material=${materialstatus}&cast=${cast}&manglik=${manglik}`,
    //   headers: {},
    // };

    // axios(config)
    //   .then(function (response) {
    //     const result = JSON.stringify(response.data.records);
    //     this.setState({ data: response.data.records });
    //     // console.log(result);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    try {
      const pokemonApiCall = await fetch(
        `http://sathimubark.com/api/wedding/read/getfilterdata.php?city=${country}&gender=${gender}&material=${materialstatus}&cast=${cast}&manglik=${manglik}`
      );
      const AllUserList = await pokemonApiCall.json();

      this.setState({ data: AllUserList.records, loading: false });
    } catch (err) {
      console.log("Matching dara-----------", err);
    }
  };

  componentDidMount() {}
  render() {
    const { navigation } = this.props;
    const { data } = this.state;

    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 10, flex: 1 }}>
          <View
            style={{
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 10,
            }}
          >
            <Text style={styles.textstyle}>Search Matching</Text>
          </View>
          <View
            style={{
              marginTop: 10,
              width: width / 1.05,
              justifyContent: "center",
            }}
          >
            <DropDownPicker
              items={[
                {
                  label: "Select City",
                  value: "Select City",
                  color: "muted",
                  icon: () => <Icon name="check" size={20} color="gray" />,
                  hidden: true,
                },
                {
                  label: "New Delhi",
                  value: "New Delhi",
                  icon: () => <Icon name="flag" size={20} color="#fff" />,
                },
                {
                  label: "Ghaziabad",
                  value: "Ghaziabad",
                  icon: () => <Icon name="flag" size={20} color="#fff" />,
                },
                {
                  label: "Kanpur",
                  value: "Kanpur",
                  icon: () => <Icon name="flag" size={20} color="#fff" />,
                },
                {
                  label: "Lucknow",
                  value: "Lucknow",
                  icon: () => <Icon name="flag" size={20} color="#fff" />,
                },
                {
                  label: "Unnao",
                  value: "Unnao",
                  icon: () => <Icon name="flag" size={20} color="#fff" />,
                },
                {
                  label: "Raebareli",
                  value: "Raebareli",
                  icon: () => <Icon name="flag" size={20} color="#fff" />,
                },
                {
                  label: "Allahabad",
                  value: "Allahabad",
                  icon: () => <Icon name="flag" size={20} color="#fff" />,
                },
              ]}
              //defaultValue={this.state.country}
              value={this.state.country}
              containerStyle={{ height: 60 }}
              style={{ backgroundColor: "#900" }}
              globalTextStyle={{ fontSize: 20, color: "#fff" }}
              arrowSize={30}
              arrowColor="#fff"
              itemStyle={{
                justifyContent: "flex-start",
              }}
              dropDownStyle={{ backgroundColor: "#900" }}
              onChangeItem={(item) =>
                this.setState({
                  country: item.value,
                })
              }
            />
          </View>
          <View
            style={{
              marginTop: 10,
              width: width / 1.05,
              justifyContent: "center",
            }}
          >
            <DropDownPicker
              items={[
                {
                  label: "Select Gender",
                  value: "Select Gender",
                  color: "muted",
                  icon: () => <Icon name="check" size={20} color="gray" />,
                  hidden: true,
                },
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
              ]}
              defaultValue={this.state.gender}
              containerStyle={{ height: 60 }}
              style={{ backgroundColor: "#900" }}
              globalTextStyle={{ fontSize: 20, color: "#fff" }}
              arrowSize={30}
              arrowColor="#fff"
              itemStyle={{
                justifyContent: "flex-start",
              }}
              dropDownStyle={{ backgroundColor: "#900" }}
              onChangeItem={(item) =>
                this.setState({
                  gender: item.value,
                })
              }
            />
          </View>
          <View
            style={{
              marginTop: 10,
              width: width / 1.05,
              justifyContent: "center",
            }}
          >
            <DropDownPicker
              items={[
                {
                  label: "Select Material Status",
                  value: "Select Material Status",
                  color: "muted",
                  icon: () => <Icon name="check" size={20} color="gray" />,
                  hidden: true,
                },
                { label: "Un Married", value: "Un Married" },
                { label: "Married", value: "Married" },
                { label: "Awaiting Divorce", value: "Awaiting Divorce" },
                { label: "Divorced", value: "Divorced" },
                { label: "Widowed", value: "Widowed" },
                { label: "Annulled", value: "Annulled" },
              ]}
              defaultValue={this.state.materialstatus}
              containerStyle={{ height: 60 }}
              style={{ backgroundColor: "#900" }}
              globalTextStyle={{ fontSize: 20, color: "#fff" }}
              arrowSize={30}
              arrowColor="#fff"
              itemStyle={{
                justifyContent: "flex-start",
              }}
              dropDownStyle={{ backgroundColor: "#900" }}
              onChangeItem={(item) =>
                this.setState({
                  materialstatus: item.value,
                })
              }
            />
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "flex-start",
              width: width / 1.05,
            }}
          >
            <DropDownPicker
              items={[
                {
                  label: "Age (min)",
                  value: "Age (min)",
                  color: "muted",
                  hidden: true,
                },
                {
                  label: "24 <",
                  value: "24 <",
                },
                {
                  label: "25 <",
                  value: "25 <",
                },
                {
                  label: "26 <",
                  value: "26 <",
                },
                {
                  label: "27 <",
                  value: "27 <",
                },
                {
                  label: "28 <",
                  value: "28 <",
                },
                {
                  label: "29 <",
                  value: "29 <",
                },
                {
                  label: "30 <",
                  value: "30 <",
                },
                {
                  label: "31 <",
                  value: "31 <",
                },
                {
                  label: "32 <",
                  value: "32 <",
                },
                {
                  label: "33 <",
                  value: "33 <",
                },
                {
                  label: "34 <",
                  value: "34 <",
                },
                {
                  label: "35 <",
                  value: "35 <",
                },
                {
                  label: "36 <",
                  value: "36 <",
                },
                {
                  label: "37 <",
                  value: "37 <",
                },
                {
                  label: "38 <",
                  value: "38 <",
                },
                {
                  label: "39 <",
                  value: "39 <",
                },
                {
                  label: "40",
                  value: "40",
                },
              ]}
              defaultValue={this.state.Agemin}
              containerStyle={{ height: 60 }}
              style={{ backgroundColor: "#900", width: width / 2.1 }}
              globalTextStyle={{ fontSize: 20, color: "#fff" }}
              arrowSize={30}
              arrowColor="#fff"
              itemStyle={{
                justifyContent: "flex-start",
              }}
              dropDownStyle={{ backgroundColor: "#900" }}
              onChangeItem={(item) =>
                this.setState({
                  Agemin: item.value,
                })
              }
            />

            <DropDownPicker
              items={[
                {
                  label: "Age (max)",
                  value: "Age (max)",
                  color: "muted",

                  hidden: true,
                },
                {
                  label: "24 >",
                  value: "24 >",
                },
                {
                  label: "25 >",
                  value: "25 >",
                },
                {
                  label: "26 >",
                  value: "26 >",
                },
                {
                  label: "27 >",
                  value: "27 >",
                },
                {
                  label: "28 >",
                  value: "28 >",
                },
                {
                  label: "29 >",
                  value: "29 >",
                },
                {
                  label: "30 >",
                  value: "30 >",
                },
                {
                  label: "31 >",
                  value: "31 >",
                },
                {
                  label: "32 >",
                  value: "32 >",
                },
                {
                  label: "33 >",
                  value: "33 >",
                },
                {
                  label: "34 >",
                  value: "34 >",
                },
                {
                  label: "35 >",
                  value: "35 >",
                },
                {
                  label: "36 >",
                  value: "36 >",
                },
                {
                  label: "37 >",
                  value: "37 >",
                },
                {
                  label: "38 >",
                  value: "38 >",
                },
                {
                  label: "39 >",
                  value: "39 >",
                },
                {
                  label: "40",
                  value: "40",
                },
              ]}
              defaultValue={this.state.Agemax}
              containerStyle={{ height: 60 }}
              style={{ backgroundColor: "#900", width: width / 2.1 }}
              globalTextStyle={{ fontSize: 20, color: "#fff" }}
              arrowSize={30}
              arrowColor="#fff"
              itemStyle={{
                justifyContent: "flex-start",
              }}
              dropDownStyle={{ backgroundColor: "#900" }}
              onChangeItem={(item) =>
                this.setState({
                  Agemax: item.value,
                })
              }
            />
          </View>
          <View
            style={{
              marginTop: 10,
              width: width / 1.05,
              justifyContent: "center",
            }}
          >
            <DropDownPicker
              items={[
                {
                  label: "Select Caste",
                  value: "Select Caste",
                  color: "muted",
                  icon: () => <Icon name="check" size={20} color="gray" />,
                  hidden: true,
                },
                {
                  label: "Hindu",
                  value: "Hindu",
                },
              ]}
              defaultValue={this.state.cast}
              containerStyle={{ height: 60 }}
              style={{ backgroundColor: "#900" }}
              globalTextStyle={{ fontSize: 20, color: "#fff" }}
              arrowSize={30}
              arrowColor="#fff"
              itemStyle={{
                justifyContent: "flex-start",
              }}
              dropDownStyle={{ backgroundColor: "#900" }}
              onChangeItem={(item) =>
                this.setState({
                  cast: item.value,
                })
              }
            />
          </View>
          <View
            style={{
              marginTop: 10,
              width: width / 1.05,
              justifyContent: "center",
            }}
          >
            <DropDownPicker
              items={[
                {
                  label: "Select Manglik",
                  value: "Select Manglik",
                  color: "muted",
                  icon: () => <Icon name="check" size={20} color="gray" />,
                  hidden: true,
                },
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
              ]}
              defaultValue={this.state.manglik}
              containerStyle={{ height: 60 }}
              style={{ backgroundColor: "#900" }}
              globalTextStyle={{ fontSize: 20, color: "#fff" }}
              arrowSize={30}
              arrowColor="#fff"
              itemStyle={{
                justifyContent: "flex-start",
              }}
              dropDownStyle={{ backgroundColor: "#900" }}
              onChangeItem={(item) =>
                this.setState({
                  manglik: item.value,
                })
              }
            />
          </View>
          <Button
            title="Search"
            buttonStyle={styles.button}
            onPress={() => this.onSubmit()}
          />
        </View>

        {data.map((item) => {
          return (
            <View style={styles.card}>
              <>
                <View style={styles.cardview}>
                  <Text style={styles.cardtext}>Name:</Text>
                  <Text style={styles.cardtext}>{item.userName}</Text>
                </View>
                <View style={styles.cardview}>
                  <Text style={styles.cardtext}>Father Name:</Text>
                  <Text style={styles.cardtext}>{item.fatherName}</Text>
                </View>
                <View style={styles.cardview}>
                  <Text style={styles.cardtext}>Mother Name:</Text>
                  <Text style={styles.cardtext}>{item.motherName}</Text>
                </View>
                <View style={styles.cardview}>
                  <Text style={styles.cardtext}>Materail Status:</Text>
                  <Text style={styles.cardtext}>{item.maritalStatus}</Text>
                </View>
                <View style={styles.cardview}>
                  <Text style={styles.cardtext}>Sallary:</Text>
                  <Text style={styles.cardtext}>{item.sallary}</Text>
                </View>
                <Button
                  title="View Profile"
                  buttonStyle={styles.button1}
                  onPress={() =>
                    navigation.navigate("Matching Profile", {
                      matchID: item.Id,
                    })
                  }
                />
              </>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
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
    marginTop: 20,
    justifyContent: "flex-start",
    padding: 5,
    height: 240,
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

export default HomeScreen;
