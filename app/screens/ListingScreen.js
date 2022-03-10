import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../../app/api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityInticator from "../components/ActivityIndicator/ActivityInticator";

function ListingScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadListings = async () => {
    const result = await listingsApi.getListings();
    if (!result.ok) return setError(true);

    setError(false);
    setLoading(false);
    setListings(result.data);
  };
  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>We could not retreive the listings</AppText>
          <AppButton title={"Retry"} onPress={loadListings} />
        </>
      )}
      <ActivityInticator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$${item.price}`}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate("ListingDetailes", item)}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
