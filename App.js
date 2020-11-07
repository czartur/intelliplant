import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SensoresScreen from "./screens/SensoresScreen";
import DataScreen from "./screens/DataScreen";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
//import React from 'react';
import * as firebase from "firebase";
<<<<<<< HEAD
import cor from "./constants/colors";
=======

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
  'Sofia': require('./assets/fonts/sofia-pro-light.otf'),
  });
};

/*const [loaded] = useFonts({
  SofiaProLight: require('../assets/fonts/sofia-pro-light.otf'),
});*/

>>>>>>> 62e0e7fb734d37b423541b8f74f5103b5a2de30a
var firebaseConfig = {
  apiKey: "AIzaSyA9sAULTDVdnvTDYWJHTxHzsecrvMYV-T4",
  authDomain: "plantaintel.firebaseapp.com",
  databaseURL: "https://plantaintel.firebaseio.com",
  projectId: "plantaintel",
  storageBucket: "plantaintel.appspot.com",
  messagingSenderId: "366479663043",
  appId: "1:366479663043:web:7549b2d2c0ada526382776",
};
firebase.initializeApp(firebaseConfig);

const Tab = createMaterialBottomTabNavigator();
const AuthTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
//const Background = require('/imgs/logo.jpeg');

const onAuthStateChange = (callback) => {
  return firebase.auth().onAuthStateChanged((user) => {
    callback({ loggedIn: user });
  });
};

import { Sidebar } from "./components/Sidebar";

export default () => {
  const [user, setUser] = React.useState({ loggedIn: false });
  useEffect(() => {
    const machadoCouto = onAuthStateChange(setUser);
    return () => {
      machadoCouto();
    };
  });
  return (
    <NavigationContainer>
      {user.loggedIn ? (
        <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
          <Drawer.Screen name="Sensores" component={SensoresScreen} />
          <Drawer.Screen name="Estatísticas" component={DataScreen} />
        </Drawer.Navigator>
      ) : (
        <AuthTab.Navigator
          tabBarOptions={{
            tabStyle: {
              height: 50,
              backgroundColor: cor.azul,
            },
          }}
        >
          <AuthTab.Screen name="SignIn" component={SignInScreen} />
          <AuthTab.Screen name="SignUp" component={SignUpScreen} />
        </AuthTab.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tab: {
    backgroundColor: cor.azul,
    marginBottom: 2,
  },
  name: {
    color: "#52A123",
  },
});
