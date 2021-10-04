import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";

function WelcomeScreen() {
  return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/backgroundNew.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image 
            source={require("../assets/logo-red.png")}
            style={styles.logo}
          />
          <Text
            style={styles.text}
          >
            Sell What You Don't Need
          </Text>
        </View>
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
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute', 
    top: 100, 
    alignItems: 'center'
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ECDC4",
  },
  text: {
    fontSize: 20,
  }
})

export default WelcomeScreen;