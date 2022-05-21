import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'
import {useNetInfo} from '@react-native-community/netinfo'
import Constants from 'expo-constants'

function OfflineNotice(props) {
  const netInfo = useNetInfo()
  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>No internet connection</AppText>
    </View>
      )
      return null
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    top: Constants.statusBarHeight,
    position: "absolute",
    zIndex: 1,


  },
  text: {
    color: colors.white,
  },
})

export default OfflineNotice
