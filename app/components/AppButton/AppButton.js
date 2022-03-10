import React from "react";
import { TouchableOpacity, Text } from "react-native";

import colors from '../../config/colors';
import styles from "./styles";

function AppButton(props) {
  const { title, color='primary',onPress} = props;
  return (
    <TouchableOpacity onPress = {onPress} style={[styles.button, {backgroundColor: colors[color]}]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
