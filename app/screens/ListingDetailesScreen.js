import React from "react";
import { View, StyleSheet} from "react-native";
import {Image} from 'react-native-expo-image-cache';

import AppText from "../components/AppText";
import ListItem from "../components//ListItem";
import colors from "../config/colors";

function ListingDetailesScreen({route}) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} tint ="light" preview={listing.images[0].thumbnailUrl} uri={listing.images[0].url} />
      <View style={styles.detailContainer}>
        <AppText style={styles.text}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Homedani"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailContainer: {
    padding: 20,
  },

  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailesScreen;
