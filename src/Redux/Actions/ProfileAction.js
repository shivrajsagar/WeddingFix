import AsyncStorage from "@react-native-community/async-storage";
import { PROFILE_DATA, LOADING } from "./types";

import axios from "axios";

export const fetchprofileData = () => async (dispatch) => {
  const user_id = await AsyncStorage.getItem("user_id");
  dispatch({ type: LOADING });

  const response = await axios.get(`http://brijesh.expresscab.in/wedding/read/read_dashboard_data.php?uid=${user_id}`);
  console.log(response);

  dispatch({ type: PROFILE_DATA, payload: response, loading: false });
};
