import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "../Icon";
import AppText from "../AppText";
import styles from "./styles";

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

export default CategoryPickerItem;
