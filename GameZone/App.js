import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import Home from './screens/home.js'
import { AppLoading } from 'expo';
import Navigator from './routes/homeStack.js'

export default function App() {
  return (
  <Navigator>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  </Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
