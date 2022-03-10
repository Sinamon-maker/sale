import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";

function FormImagePicker({ name }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  const imageUris = values[name];
  const handleAdd = (uri) => {
    const newArr = [...imageUris, uri];
    setFieldValue(name, newArr);
  };

  const handleRemove = (uri) => {
    setFieldValue(name, [...imageUris.filter((it) => it !== uri)]);
  };
  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage name={errors[name]} touched={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormImagePicker;
