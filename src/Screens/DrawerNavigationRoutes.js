import React from "react";

// Import Navigators from React Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialIcons";

import Alluserlisting from "../DrawerScreens/Alluserlisting";
import Matching from "../DrawerScreens/Matching";
import SettingsScreen from "../DrawerScreens/SettingScreen";
import Dashbroadhome from "./Dashbroadhome";
import CustomSidebarMenu from "../Components/CustomSidebarMenu";
import NavigationDrawerHeader from "../Components/NavigationDrawerHeader";
import Followers from "./Followers";
import Chat from "./Chat";
import FollowandFollower from "./FollowandFollower";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Dashbroadhome" headerMode="screen">
      <Stack.Screen
        name="Dashbroadhome"
        component={Dashbroadhome}
        options={{
          title: "Home", //Set Header Title
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
    </Stack.Navigator>
  );
};

const settingScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Setting"
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
    >
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: "Profile", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const MatchingStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Matching"
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
    >
      <Stack.Screen
        name="Matching"
        component={Matching}
        options={{
          title: "Matching",
        }}
      />
    </Stack.Navigator>
  );
};
const AlluserlistingStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="User Listing"
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
    >
      <Stack.Screen
        name="User Listing"
        component={Alluserlisting}
        options={{
          title: "User Listing",
        }}
      />
    </Stack.Navigator>
  );
};
const FollowersStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Following and Follower"
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
    >
      <Stack.Screen
        name="Follow and Followers"
        component={FollowandFollower}
        options={{
          title: "Follow and Followers",
        }}
      />
    </Stack.Navigator>
  );
};
const ChatStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Chat"
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
    >
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          title: "Chat",
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#fff",
        color: "#fff",
        itemStyle: { marginVertical: 1, color: "white" },
        labelStyle: {
          color: "#fff",
        },
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={CustomSidebarMenu}
    >
      <Drawer.Screen
        name="homeScreenStack"
        options={{ drawerLabel: "Home" }}
        component={homeScreenStack}
      />

      <Drawer.Screen
        name="settingScreenStack"
        options={{
          drawerLabel: "Profile",
        }}
        component={settingScreenStack}
      />
      <Drawer.Screen
        name="Matching"
        options={{
          drawerLabel: "Matching",
        }}
        component={MatchingStack}
      />
      <Drawer.Screen
        name="User Listing"
        options={{
          drawerLabel: "User Listing",
        }}
        component={AlluserlistingStack}
      />
      <Drawer.Screen
        name="Follow & Followers"
        options={{
          drawerLabel: "Follow & Followers",
        }}
        component={FollowersStack}
      />
      <Drawer.Screen
        name="Chat"
        options={{
          drawerLabel: "Chat",
        }}
        component={ChatStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
