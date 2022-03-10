import React from "react";
import { View, Image, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import {MaterialCommunityIcons} from '@expo/vector-icons';

import defaultStyles from '../../config/styles';

import AppText from "../AppText";

import styles from "./styles";

function ListItem({
  image,
  IconComponent,
  title,
  subTitle,
  onPress,
  renderRightActions,
  showChevrons,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={defaultStyles.colors.light}
        onPress={onPress}
      >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText numberOfLines={1} style={styles.title}>
              {title}
            </AppText>
            {subTitle && (
              <AppText numberOfLines={2} style={styles.subTitle}>
                {subTitle}
              </AppText>
            )}
          </View>

        {showChevrons && (
          <MaterialCommunityIcons
            name="chevron-right"
            color={defaultStyles.colors.medium}
            size={25}
          />
        )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default ListItem;
