import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/Welcome'
import Santa from './Components/Santa'

export default class App extends React.Component {
  render(){
    return(
      <View style={styles.container}>
      <Santa></Santa>
      <Welcome></Welcome>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#00FFFF"
  },
});
