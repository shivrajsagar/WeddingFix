import "react-native-gesture-handler";

import React from "react";

import {} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/Redux";
import AppNavigator from "./src/Navigator/AppNavigator";

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
