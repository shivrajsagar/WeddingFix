import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Dimensions,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BottomSheet, Button } from "react-native-elements";

const { width } = Dimensions.get("screen");

const initial_state = {
  name: "",
  email: "",
  nickname: "",
};

const ProfileUpdate = ({ route }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [image, setImage] = useState(pick_url1);

  const {
    name1,
    email1,
    phonenumber1,
    marital_Status1,
    pin_code1,
    city1,
    DOB1,
    height1,
    weight1,
    mother_Tonque1,
    current_Work_Status1,
    salary_Status_Criteria1,
    Sallary1,
    education_Qualification1,
    gender1,
    mangali1,
    father_Name1,
    mother_Name1,
    caste1,
    nick_name1,
    user_Password1,
    pick_url1,
  } = route.params;

  const [gender, setGender] = useState(gender1);
  const [mangalik, setMagalik] = useState(mangali1);
  const [nickname, setnickname] = useState(nick_name1);
  const [name, setname] = useState(name1);
  const [phonenumber, setphonenumber] = useState(phonenumber1);
  const [email, setEmail] = useState(email1);
  const [password, setPassword] = useState(user_Password1);
  const [fatherName, setFathername] = useState(father_Name1);
  const [motherName, setMothername] = useState(mother_Name1);
  const [biryhday, setBirthday] = useState(DOB1);
  const [maritalstatus, setMaritalstatus] = useState(marital_Status1);
  const [caste, setcaste] = useState(caste1);
  const [stateid, setstateid] = useState("");
  const [city, setCity] = useState(city1);
  const [pincode, setPincode] = useState(pin_code1);
  const [height, setHeight] = useState(height1);
  const [weight, setWeight] = useState(weight1);
  const [educationQualification, setEducationQualification] = useState(
    education_Qualification1
  );
  const [mothertongue, setMothertongue] = useState(mother_Tonque1);
  const [currentWorking, setCurrentWorking] = useState(current_Work_Status1);
  const [workingstatus, setWorkingStatus] = useState(salary_Status_Criteria1);
  const [currentIncome, setCurrentIncome] = useState(Sallary1);
  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState(initial_state);

  const [avatar, setAvatar] = useState(
    "https://source.unsplash.com/400x400?man"
  );

  const cameraImage = async () => {
    let { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status != "granted") {
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const galleryImage = async () => {
    let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status != "granted") {
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            padding: 5,
            color: "#fff",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Profile Setting
        </Text>
        <View>
          <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
            <Image
              style={styles.avatar}
              source={{
                uri: image ? image : avatar,
              }}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <BottomSheet
            isVisible={isVisible}
            containerStyle={{ backgroundColor: "rgba(.5,0.25,0,0.2)" }}
          >
            <View
              style={{
                backgroundColor: "white",
                height: width * 0.6,
                flex: 1,
                justifyContent: "space-around",
              }}
            >
              <Button
                title="Camera"
                onPress={cameraImage}
                buttonStyle={{
                  margin: 20,
                  height: 50,
                  borderRadius: 15,
                  backgroundColor: "orange",
                }}
              />
              <Button
                title="Gallery"
                onPress={galleryImage}
                buttonStyle={{
                  margin: 20,
                  height: 50,
                  borderRadius: 15,
                  backgroundColor: "orange",
                }}
              />
              <Button
                title="Cancel"
                buttonStyle={{
                  margin: 20,
                  height: 50,
                  borderRadius: 15,
                  backgroundColor: "red",
                }}
                onPress={() => setIsVisible(!isVisible)}
              />
            </View>
          </BottomSheet>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: 40,
            padding: 5,
            marginTop: 270,
          }}
        >
          <Text style={styles.label}>Nick Name :</Text>
          <TextInput
            value={nickname}
            placeholder="Enter Nick Name"
            style={styles.inputstyle}
            underlineColorAndroid="#f000"
            placeholderTextColor="#8b9cb5"
            returnKeyType="next"
            onChangeText={(text) => setnickname(text)}
          />
        </View>
        <View style={styles.viewstyle}>
          <Text style={styles.label}>Name :</Text>
          <TextInput
            value={name}
            placeholder="Name"
            style={styles.inputstyle}
            underlineColorAndroid="#f000"
            placeholderTextColor="#8b9cb5"
            returnKeyType="next"
            onChangeText={(text) => setname(text)}
          />
        </View>
        <View style={styles.viewstyle}>
          <Text style={styles.label}>Phone Number :</Text>
          <TextInput
            value={phonenumber}
            onChangeText={(number) => setphonenumber(number)}
            placeholder="Enter Phone Number"
            style={styles.inputstyle}
            color="muted"
            editable={false}
            underlineColorAndroid="#f000"
            placeholderTextColor="#8b9cb5"
            returnKeyType="next"
          />
        </View>
        <View style={styles.viewstyle}>
          <Text style={styles.label}>Email :</Text>
          <TextInput
            value={email}
            placeholder="Enter Email"
            editable={false}
            style={styles.inputstyle}
            color="muted"
            underlineColorAndroid="#f000"
            placeholderTextColor="#8b9cb5"
            returnKeyType="next"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.viewstyle}>
          <Text style={styles.label}>Password :</Text>
          <TextInput
            value={password}
            placeholder="Enter Password"
            style={styles.inputstyle}
            underlineColorAndroid="#f000"
            placeholderTextColor="#8b9cb5"
            returnKeyType="next"
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.viewstyle}>
          <Text style={styles.label}>Father Name :</Text>
          <TextInput
            value={fatherName}
            onChangeText={(text) => setFathername(text)}
            placeholder="Enter Father Name"
            style={styles.inputstyle}
            underlineColorAndroid="#f000"
            placeholderTextColor="#8b9cb5"
            returnKeyType="next"
          />
        </View>
        <View style={styles.viewstyle}>
          <Text style={styles.label}>Mother Name :</Text>
          <TextInput
            value={motherName}
            onChangeText={(text) => setMothername(text)}
            placeholder="Enter Mother Name"
            style={styles.inputstyle}
            underlineColorAndroid="#f000"
            placeholderTextColor="#8b9cb5"
            returnKeyType="next"
          />
        </View>
        <View style={styles.viewstyle}>
          <Text style={styles.label}>Gender :</Text>
          <TextInput
            value={gender}
            onChangeText={(text) => setGender(text)}
            placeholder="Enter Gender"
            style={styles.inputstyle}
            underlineColorAndroid="#f000"
            placeholderTextColor="#8b9cb5"
            returnKeyType="next"
          />
        </View>
        <View style={styles.viewstyle}>
          <Text style={styles.label}>Mangali :</Text>
          <TextInput
            value={mangalik}
            onChangeText={(text) => setMagalik(text)}
            placeholder="Enter Mangali"
            style={styles.inputstyle}
            underlineColorAndroid="#f000"
            placeholderTextColor="#8b9cb5"
            returnKeyType="next"
          />
        </View>
        {/* <View style={styles.viewstyle}>
          <Text style={styles.label}>Gender :</Text>
          <RadioGroup
            selected={true}
            circleStyle={{ fillColor: "green", borderColor: "green" }}
            radioButtons={radioButtonsData1}
            placeholderTextColor="#fff"
            onPress={onPressRadioButton}
            layout="row"
          />
        </View>
        <View style={styles.viewstyle}>
          <Text style={styles.label}>Mangali :</Text>
          <RadioGroup selected={true} color="#fff" radioButtons={yesdata} onPress={onPressRadioButton1} layout="row" />
        </View> */}
        <View style={styles.viewstyle}>
          <Text style={styles.label}>Birthday :</Text>
          <TextInput
            value={biryhday}
            onChangeText={(text) => setBirthday(text)}
            placeholder="YYYY-MM-DD"
            dataDetectorTypes="calendarEvent"
            type={Date}
            format="YYYY-MM-DD"
            style={styles.inputstyle}
            underlineColorAndroid="#f000"
            placeholderTextColor="#8b9cb5"
            returnKeyType="next"
          />
          {/* <TextInputMask
            style={styles.inputstyle}
            type={"datetime"}
            options={{
              format: "DD-MM-YYYY",
            }}
            value={biryhday}
            onChangeText={(number) => setBirthday(number)}
          /> */}
        </View>
        <View style={styles.viewstyle}>
          <Text style={styles.label}>Marital Status :</Text>
          <TextInput
            value={maritalstatus}
            onChangeText={(text) => setMaritalstatus(text)}
            placeholder="Enter Marital Status"
            style={styles.inputstyle}
            underlineColorAndroid="#f000"
            placeholderTextColor="#8b9cb5"
            returnKeyType="next"
          />
        </View>
        <View style={styles.viewstyle}>
          <Text style={styles.label}>Caste :</Text>
          <TextInput
            value={caste}
            onChangeText={(text) => setcaste(text)}
            placeholder="Enter Caste"
            style={styles.inputstyle}
            underlineColorAndroid="#f000"
            placeholderTextColor="#8b9cb5"
            returnKeyType="next"
          />
        </View>
        {/* <View style={styles.viewstyle}>
          <Text style={styles.label}>State :</Text>
          <TextInput
            value={stateid}
            onChangeText={(text) => setstateid(text)}
            placeholder="Enter State"
            style={styles.inputstyle}
            underlineColorAndroid="#f000"
            placeholderTextColor="#8b9cb5"
            returnKeyType="next"
          />
        </View> */}
        <View style={styles.viewstyle}>
          <Text style={styles.label}>City :</Text>
          <TextInput
            value={city}
            onChangeText={(text) => setCity(text)}
            placeholder="Enter City"
            style={styles.inputstyle}
            underlineColorAndroid="#f000"
            placeholderTextColor="#8b9cb5"
            returnKeyType="next"
          />
        </View>
        <View style={styles.viewstyle}>
          <Text style={styles.label}>Pincode :</Text>
          <TextInput
            value={pincode}
            onChangeText={(number) => setPincode(number)}
            placeholder="Enter Pincode"
            style={styles.inputstyle}
            underlineColorAndroid="#f000"
            placeholderTextColor="#8b9cb5"
            returnKeyType="next"
          />
        </View>
        <View style={styles.viewstyle}>
          <Text style={styles.label}>Height :</Text>
          <TextInput
            value={height}
            onChangeText={(number) => setHeight(number)}
            placeholder="Enter Height in meter"
            style={styles.inputstyle}
            underlineColorAndroid="#f000"
            placeholderTextColor="#8b9cb5"
            returnKeyType="next"
          />
        </View>
        <View style={styles.viewstyle}>
          <Text style={styles.label}>Weight (kg) :</Text>
          <TextInput
            value={weight}
            onChangeText={(number) => setWeight(number)}
            placeholder="Enter Weight (kg)"
            style={styles.inputstyle}
            underlineColorAndroid="#f000"
            placeholderTextColor="#8b9cb5"
            returnKeyType="next"
          />
        </View>
        <View style={styles.viewstyle}>
          <Text style={styles.label1}>Education Qualification :</Text>
          <TextInput
            value={educationQualification}
            onChangeText={(text) => setEducationQualification(text)}
            placeholder="Enter Education Qualification"
            style={styles.inputstyle}
            underlineColorAndroid="#f000"
            placeholderTextColor="#8b9cb5"
            returnKeyType="next"
          />
        </View>
        <View style={styles.viewstyle}>
          <Text style={styles.label}>Mother Tonque :</Text>
          <TextInput
            value={mothertongue}
            onChangeText={(text) => setMothertongue(text)}
            placeholder="Enter Mother Tonque"
            style={styles.inputstyle}
            underlineColorAndroid="#f000"
            placeholderTextColor="#8b9cb5"
            returnKeyType="next"
          />
        </View>
        <View style={styles.viewstyle}>
          <Text style={styles.label1}>Current Working Status :</Text>
          <TextInput
            value={currentWorking}
            onChangeText={(text) => setCurrentWorking(text)}
            placeholder="Current Working Status"
            style={styles.inputstyle}
            underlineColorAndroid="#f000"
            placeholderTextColor="#8b9cb5"
            returnKeyType="next"
          />
        </View>
        <View style={styles.viewstyle}>
          <Text style={styles.label1}>If Working Status :</Text>
          <TextInput
            value={workingstatus}
            onChangeText={(text) => setWorkingStatus(text)}
            placeholder="Enter Status"
            style={styles.inputstyle}
            underlineColorAndroid="#f000"
            placeholderTextColor="#8b9cb5"
            returnKeyType="next"
          />
        </View>
        <View style={styles.viewstyle}>
          <Text style={styles.label}>Current Income :</Text>
          <TextInput
            value={currentIncome}
            onChangeText={(number) => setCurrentIncome(number)}
            placeholder="Current Income (in Month)"
            style={styles.inputstyle}
            underlineColorAndroid="#f000"
            placeholderTextColor="#8b9cb5"
            returnKeyType="next"
          />
        </View>
        <Button
          title="Save"
          buttonStyle={styles.button}
          onPress={() => updateprofile()}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#900",
    flex: 1,
    width: width,
  },
  inputstyle: {
    flex: 1,
    color: "white",
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
    marginLeft: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff",
    marginTop: 4,
    width: 120,
  },
  label1: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff",
    width: 120,
    height: 40,
  },
  viewstyle: {
    flexDirection: "row",
    height: 40,
    padding: 5,
    marginTop: 15,
  },
  button: {
    width: 120,
    backgroundColor: "orange",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 50,
    marginTop: 50,
  },
  radiogroup: {
    flexDirection: "row",
    color: "#fff",
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
});
export default ProfileUpdate;
