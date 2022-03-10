import {
  setStatusBarNetworkActivityIndicatorVisible,
  StatusBar,
} from "expo-status-bar";
import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingScreen from "./app/screens/ListingScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import Card from "./app/components/Card";
import AppText from "./app/components/AppText";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from './app/navigation/AuthNavigator';
import MainNavigator from "./app/navigation/MainNavigator";

import * as ImagePicker from "expo-image-picker";
import navigationTheme from "./app/navigation/NavigationTheme";



export default function App() {

  return (
    <NavigationContainer theme = {navigationTheme}>
      <MainNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
