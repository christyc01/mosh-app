import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";

function WelcomeScreen() {
  return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/backgroundNew.jpg")}
      >
        <Image 
          source={require("../assets/logo-red.png")}
          style={styles.logo}
        />
        <Text
          style={styles.text}
        >
          Tagline
        </Text>
        <View
          style={styles.loginButton}  
        >
          <Text>Login</Text>
        </View>
        <View
          style={styles.registerButton}  
        >
          <Text>Register</Text>
        </View>
      </ImageBackground>
  )}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ECDC4",
  },
  logo: {
    position: 'absolute',
    top: 100,
    width: 100,
    height: 100,
    alignSelf: "center"
  },
  text: {
    fontSize: 20,
    position: "absolute",
    top: 230,
    alignSelf: "center"
  }
})

export default WelcomeScreen;