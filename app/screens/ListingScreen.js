import React, { useEffect } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Screen from '../components/Screen'
import useApi from '../hooks/useApi'
import Card from '../components/Card'
import colors from '../config/colors'
import listingsApi from '../../app/api/listings'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import ActivityInticator from '../components/ActivityIndicator/ActivityInticator'

function ListingScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings,
  )

  useEffect(() => {
    loadListings()
  }, [])

  return (
    <>
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>We could not retreive the listings</AppText>
            <AppButton title={'Retry'} onPress={loadListings} />
          </>
        )}

        <FlatList
          data={listings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={`$${item.price}`}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate('ListingDetailes', item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
      <ActivityInticator visible={loading} />
    </>
  )
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
})

export default ListingScreen
