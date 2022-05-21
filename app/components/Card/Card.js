import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import {Image} from 'react-native-expo-image-cache';

import AppText from "../AppText";
import styles from "./styles";

function Card(props) {
  const { title, subTitle, imageUrl, onPress, thumbnailUrl } = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} tint = "light" preview ={{uri: thumbnailUrl}} uri = {imageUrl}  />
        <View style={styles.detailContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Card;
