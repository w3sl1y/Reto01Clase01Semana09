/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import { Buttons } from './components/Buttons';

const App = () => {
  return (
    <View
    style={styles.container}>
      <Text
      style={styles.presentation}>Hello friend!</Text>
      <TextInput
      style={styles.input} 
      placeholder="Name"
      placeholderTextColor="#00b4d8"
      />
      <TextInput
      style={styles.input} 
      placeholder="E-mail"
      placeholderTextColor="#00b4d8"
      />
      <TextInput
      style={styles.input} 
      placeholder="Password"
      placeholderTextColor="#00b4d8"
      />
      <Text
      style={styles.text}>I've read and aggre to <Text style={styles.press}>Terms & Conditions</Text></Text>
      <Buttons />
      <Text
      style={styles.text}>Already have an account? <Text style={styles.press}>Sign in</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', 
    flex: 1, 
    alignItems: 'center', 
    margin: 20
  },
  presentation: {
    fontSize: 24, 
    margin: 10,
    color: '#212121',
    fontWeight: '700',
    letterSpacing: 2
  },
  text:{
    fontSize: 16, 
    margin: 10,
    color: '#00b4d8',
    fontWeight: '500'
  },
  press:{
    color: '#2a6f97'
  },
  input:{
    color: '#2a6f97',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#00b4d8',
    borderRadius: 20,
    width: 300,
    margin: 8
  },
});

export default App;
