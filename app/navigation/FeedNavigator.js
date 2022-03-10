import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingDetailesScreen from "../screens/ListingDetailesScreen";
import ListingScreen from "../screens/ListingScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      presentation: "modal",
    }}
  >
    <Stack.Screen name="Listings" component={ListingScreen} options={{
      headerShown: false
    }} />
    <Stack.Screen
      name="ListingDetailes"
      component={ListingDetailesScreen}
      options={{

        title: ''
      }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
