import AsyncStorage from "@react-native-community/async-storage";
import { PROFILE_DATA, LOADING } from "./types";

import axios from "axios";

export const fetchprofileData = () => async (dispatch) => {
  const user_id = await AsyncStorage.getItem("user_id");
  dispatch({ type: LOADING });

  const response = await axios.get(
    `http://brijesh.expresscab.in/wedding/read/read_dashboard_data.php?uid=${user_id}`
  );
  console.log(response);

  dispatch({ type: PROFILE_DATA, payload: response, loading: false });
};

const profileUpdate = () => async (dispatch) => {
  try {
    const user_id = await AsyncStorage.getItem("user_id");

    setLoading(true);

    const newFile = {
      name: avatar,
      type: "image/jpeg",
      uri: Platform.OS === "android" ? avatar : avatar.replace("file://", ""),
    };

    var dataToSend = {
      proflePicUrl: newFile,
      user_id: user_id,
      userName: name,
      gender: gender,
      city: city,
      pincode: pincode,
      dob: biryhday,
      maritalStatus: maritalstatus,
      height: height,
      weight: weight,
      mangali: mangalik,
      motherTonque: mothertongue,
      currentWorkStatus: currentWorking,
      salaryStatusCriteria: workingstatus,
      sallary: currentIncome,
      educationQualification: educationQualification,
      fatherName: fatherName,
      motherName: motherName,
      caste: caste,
      nickname: nickname,
      userPassword: password,
    };

    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch(
      "http://sathimubark.com/api/wedding/profileupdate.php?apicall=userprofileupdate",
      {
        method: "POST",
        body: formBody,
        headers: {
          //Header Defination
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);

        if (responseJson.error != true) {
          Alert.alert("User Profile Information updated");
          console.log("User Profile Information updated");
        } else {
          setErrortext("No Data updated");
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  } catch (error) {
    throw error;
  }
};
