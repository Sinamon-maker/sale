import React from "react";
import { useFormikContext } from "formik";
import  AppPicker  from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  items,
  name,
  PickerItemComponent,
  placeholder,
  numberOfColumns,
  width,
  ...otherProps
}) {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        onSelectPickerValue={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
        {...otherProps}
      />
      <ErrorMessage name={errors[name]} touched={touched[name]} />
    </>
  );
}

export default AppFormPicker;
