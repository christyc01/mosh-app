import React from 'react';
import { View, Text, Image, StyleSheet } from "react-native";

function ViewImageScreenNew() {
  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.closeIcon}
      />
      <View
        style={styles.deleteIcon}
      />
      <Image 
        resizeMode="contain"
        source={require("../assets/chairNew.jpg")}
        style={styles.viewBackground}
      />
    </View>
  )
}


// "rnss" to auto-create styles template
const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: { 
    backgroundColor: "black",
    flex: 1,
    height: "100%",
    justifyContent: 'flex-end',
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#4ECDC4",
    position: "absolute",
    top: 40,
    right: 30,
  },
  viewBackground: {
    height: "100%",
    width: "100%",
  },
})

export default ViewImageScreenNew;