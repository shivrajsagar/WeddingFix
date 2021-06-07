import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Import Screens
import SplashScreen from "../Screens/SplashScreen";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import HomeScreen from "../DrawerScreens/HomeScreen";
import MatchingProfile from "../Components/MatchingProfile";
import ProfileUpdate from "../DrawerScreens/ProfileUpdate";
import DrawerNavigationRoutes from "../Screens/DrawerNavigationRoutes";
import NavigationDrawerHeader from "../Components/NavigationDrawerHeader";
import AllUser from "../Screens/AllUser";
import Following from "../Screens/Following";
import Followers from "../Screens/Followers";
import Chat from "../Screens/Chat";
import ChatMessage from "../Screens/ChatMessage";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function Auth() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: "Register", //Set Header Title
          headerStyle: {
            backgroundColor: "#990000", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Followers"
      tabBarOptions={{
        activeTintColor: "#fff",
        labelStyle: { fontSize: 15 },
        style: { backgroundColor: "#900", fontWeight: "bold" },
      }}
    >
      <Tab.Screen name="Followers" component={Followers} />
      <Tab.Screen name="Following" component={Following} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DrawerNavigationRoutes"
        component={DrawerNavigationRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Dashboard", //Set Header Title

          headerStyle: {
            backgroundColor: "#990000", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
        screenOptions={{
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#990000", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Profile Update"
        component={ProfileUpdate}
        options={{
          title: "Profile Update",
          headerStyle: {
            backgroundColor: "#990000", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Matching
        Profile"
        component={MatchingProfile}
        options={{
          title: "Matching Profile",
          headerStyle: {
            backgroundColor: "#990000", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="All User"
        component={AllUser}
        options={{
          title: "View Profile",
          headerStyle: {
            backgroundColor: "#990000", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />

      <Stack.Screen
        name="Following and Followers"
        component={MyTabs}
        options={{
          title: "Following and Followers",
          headerStyle: {
            backgroundColor: "#990000", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          title: "Chat",
          headerStyle: {
            backgroundColor: "#990000", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Message"
        component={ChatMessage}
        options={{
          title: "Message",
          headerStyle: {
            backgroundColor: "#990000", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Followers"
        component={Followers}
        options={{
          title: "Followers",
          headerStyle: {
            backgroundColor: "#990000", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
