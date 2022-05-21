import React, { useState, useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen'

import AuthNavigator from './app/navigation/AuthNavigator'
import MainNavigator from './app/navigation/MainNavigator'
import navigationTheme from './app/navigation/NavigationTheme'
import OfflineNotice from './app/components/OfflineNotice'
import AuthContext from './app/auth/context'
import authStorage from './app/auth/storage'

SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`),
  )
  .catch(console.warn) // it's good to explicitly catch and inspect any error

export default function App() {
  const [user, setUser] = useState()

  const restoreUser = async () => {
    const user = await authStorage.getUser()

      await SplashScreen.hideAsync();

    if (user) setUser(user)
  }

  useEffect(() => {
    restoreUser()
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      <OfflineNotice />
    </AuthContext.Provider>
  )
}
