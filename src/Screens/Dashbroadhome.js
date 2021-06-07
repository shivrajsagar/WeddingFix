import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  View,
  Dimensions,
} from "react-native";

import { dashboard } from "../Constants/data";
import { CardComponent } from "../Components";

const { width, height } = Dimensions.get("screen");

class Dashbroadhome extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#900",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width, height: height * 0.4 }}
            source={require("../../Image/wedding.png")}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            flex: 1,
            marginTop: -30,
            backgroundColor: "#900",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <FlatList
            contentContainerStyle={{
              justifyContent: "space-between",
            }}
            data={dashboard}
            renderItem={({ item, index }) => {
              return <CardComponent item={item} navigation={navigation} />;
            }}
            numColumns={3}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Dashbroadhome;
