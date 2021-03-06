import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, setFieldValue,  errors, touched, values } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text => setFieldValue(name, text))}
        width={width}
        value = {values[name]}
        {...otherProps}
      />
      <ErrorMessage name={errors[name]} touched={touched[name]} />
    </>
  );
}
const styles = StyleSheet.create({});
export default AppFormField;
