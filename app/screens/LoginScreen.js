import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen/";
import { AppForm, SubmitButton, AppFormField } from "../components/Forms";


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          icon="email"
          name="email"
          placeholder="Enter your email"
          textContentType="emailAddress"
        />

        <AppFormField
          autCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Enter your password"
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    alignSelf: "center",
    width: 80,
    height: 80,
    marginBottom: 20,
    marginTop: 50,
  },
});

export default LoginScreen;
