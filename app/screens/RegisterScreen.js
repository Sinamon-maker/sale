import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen/";
import { AppForm, SubmitButton, AppFormField } from "../components/Forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Enter your name"
          textContentType="name"
        />
        <AppFormField
          autoCapitalize="none"
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

export default RegisterScreen;
