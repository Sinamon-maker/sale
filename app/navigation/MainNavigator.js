import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ListingScreen from "../screens/ListingScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import TabButton from './TabButton';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{headerShown: false}}
      tapBarOptions={{
        activeBackgroundColor: "tomato",
        activeTintColor: "white",
        inactiveBackgroundColor: "#eee",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Feed"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
        component={FeedNavigator}
      />
      <Tab.Screen
        name="ListingEdit"
        options={({navigation}) => ({
          tabBarButton: () => <TabButton onPress = {() => navigation.navigate("ListingEdit")}/>,

        })}
        component={ListingEditScreen}
      />
      <Tab.Screen
        name="AccountMain"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account"
              size={size}
              color={color}
            />
          ),
        }}
        component={AccountNavigator}
      />
    </Tab.Navigator>
  );
};


export default MainNavigator;
