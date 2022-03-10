import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from '../AppText';

function ErrorMessage({name, touched}) {
  if(!name || !touched) return null
  return <AppText style={styles.text}>{name}</AppText>;
}
const styles = StyleSheet.create({
text:{
  color: 'red'
}
})

export default ErrorMessage;