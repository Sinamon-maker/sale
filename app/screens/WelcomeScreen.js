
import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text, Button } from "react-native";

import AppButton from "../components/AppButton";


function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
    blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style = {styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style = {styles.buttonContainer}>
        <AppButton title={"Login"} onPress = {() => navigation.navigate("Login")}/>
        <AppButton title={"Register"} color = {'secondary'} onPress = {() => navigation.navigate("Register")}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer:{
    padding: 20,
    width: "100%",
  },

  logo: {
    width: 100,
    height: 100,
  },
  tagline:{
    fontSize:25,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
});

export default WelcomeScreen;
