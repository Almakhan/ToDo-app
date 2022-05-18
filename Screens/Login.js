import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView
} from "react-native";

import firebase from "firebase";
import db from "../Config";

import {RFValue} from "react-native-responsive-fontsize";

const bgImage = require("../assets/appIcon.jpg");
const appIcon = require("../assets/appIcon.jpg");

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate("BottomTab");
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.upperContainer}>
          <Image source={appIcon} style={styles.appIcon} />
          <Text style={styles.title}>Student App </Text>
        </View>
        <View style={styles.lowerContainer}>
          <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ email: text })}
            placeholder={"Enter Email"}
            placeholderTextColor={"#FFFFFF"}
            autoFocus
          />
          <TextInput
            style={[styles.textinput, { marginTop: 20 }]}
            onChangeText={text => this.setState({ password: text })}
            placeholder={"Enter Password"}
            placeholderTextColor={"#FFFFFF"}
            secureTextEntry
          />
          <TouchableOpacity
            style={[styles.button, { marginTop: 20 }]}
            onPress={() => this.handleLogin(email, password)}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9C4EF"
  },
  upperContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  appIcon: {
    width: RFValue( 200),
    height: RFValue( 200),
    resizeMode: "contain",
    marginTop: RFValue( 40)
  },
  title: {
    fontSize:RFValue( 40),
    fontFamily: "Rajdhani_600SemiBold",
    paddingTop:RFValue( 20),
    color: "#4C5D70"
  },
  lowerContainer: {
    flex: 0.5,
    alignItems: "center"
  },
  textinput: {
    width: RFValue( '75%'),
    height: RFValue( 60),
    padding: RFValue( 19),
    borderColor: "#968AC1",
    borderWidth: RFValue( 3),
    borderRadius: RFValue( 10),
    fontSize: RFValue( 25),
    color: "#FFFFFF",
    fontFamily: "Rajdhani_600SemiBold",
    backgroundColor: "#DDCEF7"
  },
  button: {
    width: RFValue(120),
    height: RFValue( 60),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3C2F6",
    borderRadius: RFValue( 20),
    borderWidth: RFValue( 2),
    borderColor: "#4C5D70"
  },
  buttonText: {
    fontSize: RFValue( 30),
    color: "#4C5D70",
    fontFamily: "Rajdhani_600SemiBold"
  }
});
