import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
   const name='LiuCQ'

  return (
  <View>
  <Text style={styles.heading}>Components Screen: Getting started with React Native!</Text>
  <Text style={styles.subheading}>Components Screen: My name is {name}</Text>
  
  </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 45,
  },
  subheading: {
    fontSize:20
  }
});

export default ComponentsScreen;
