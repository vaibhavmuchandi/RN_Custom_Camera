import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DentCamera from './Components/Camera/Camera';

export default function App() {
  return (
      <DentCamera/>
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
