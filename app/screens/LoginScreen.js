import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen/'
import AuthContext from "../auth/context"
import {
  AppForm,
  SubmitButton,
  AppFormField,
  ErrorMessage,
} from '../components/Forms'
import authApi from '../api/auth'
import useAuth from '../auth/useAuth'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
})

function LoginScreen() {

const { logIn} = useAuth()
  const [loginFailed, setLoginFailed] = useState(false)

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login( email, password )
     if (!result.ok) return setLoginFailed(true)
    setLoginFailed(false)
   logIn(result.data)
  }
  return (
    <Screen style={styles.container}>
      <Image style={styles.image} source={require('../assets/logo-red.png')} />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          name="Invalid email and/or password."
          touched={loginFailed}
        />
        <AppFormField
          autCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          icon="email"
          name="email"
          placeholder="Enter your email"
          textContentType="emailAddress"
        />

        <AppFormField
          autCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Enter your password"
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    marginBottom: 20,
    marginTop: 50,
  },
})

export default LoginScreen
