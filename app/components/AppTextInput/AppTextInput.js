import React from "react";
import { View, TextInput } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../../config/styles";
import styles from "./styles";

function AppTextInput({
  icon,
  width = "100%",
  placeholder,
  onChange,
  ...otherProps
}) {
  return (
    <View style={[styles.inputContainer, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          color={colors.medium}
          size={20}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        onChangeText={onChange}
        placeholder={placeholder}
        {...otherProps}
      />
    </View>
  );
}

export default AppTextInput;
