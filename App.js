import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, FlatList  } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50
  }
});
