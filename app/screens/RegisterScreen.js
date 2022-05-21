import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'
import Screen from '../components/Screen/'
import {
  AppForm,
  SubmitButton,
  AppFormField,
  ErrorMessage,
} from '../components/Forms'
import ActivityInticator from '../components/ActivityIndicator/ActivityInticator'
import userApi from '../api/users'
import authApi from '../api/auth'
import useAuth from '../auth/useAuth'
import useApi from '../hooks/useApi'

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
})

function RegisterScreen() {
  const registerApi = useApi(userApi.register)
  const loginApi = useApi(authApi.login)

  const auth = useAuth()
  const [error, setError] = useState(null)
  const [loginFailed, setLoginFailed] = useState(false)

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo)
    if (!result.ok) {
      if (result.data) setError(result.data.error)
      else {
        setError('Unexpected error occured')
      }
      return
    }
    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password,
    )
    auth.logIn(authToken)
  }

  return (
    <>
      <Screen style={styles.container}>
        <AppForm
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage name={error} touched={error !== null} />
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Enter your name"
            textContentType="name"
          />
          <AppFormField
            autoCapitalize="none"
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
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
      <ActivityInticator visible={loginApi.loading || registerApi.loading} />
    </>
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

export default RegisterScreen
