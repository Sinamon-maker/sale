import React from "react";
import { View, TouchableOpacity } from "react-native";
import AppText from "../AppText";
import styles from './styles'

function PickerItem({ item, onPress}) {
  return (
    <TouchableOpacity style={styles.itemCategories} onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

export default PickerItem;
