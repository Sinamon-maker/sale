import AsyncStorage  from '@react-native-async-storage/async-storage'

const prefix = 'cache'
const expireInMinutes = 5

const isExpired = (result) => {
  const now = +new Date()
  return (now - result.timestamp) * 1000 * 60 > expireInMinutes
}

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: +new Date(),
    }

    await AsyncStorage.setItem(prefix + key, JSON.stringify(item))

  } catch (error) {
    console.log('error',error)
  }
}

const get = async (key) => {
  try {
    const result = await AsyncStorage.getItem(prefix + key)
    if (!result) return null

    if (isExpired(result)) {
      await AsyncStorage.removeItem(prefix + key)
      return null
    }

    return result.value
  } catch (error) {}
}

export default {
  store,
  get,
}
