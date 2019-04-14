import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { Actions } from "react-native-router-flux";
import { TextField } from "react-native-material-textfield";
import styles from "./styles";
import { firebaseRef } from "../../Firebase/firebase";
class SignInModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  login = () => {
    console.log(this.state.email);
    firebaseRef
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(response => {
        console.log("response", response);
      })
      .catch(error => {
        console.log(error);
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };
  email(email) {
    console.log(email);
    this.setState({
      email: email
    });
  }
  password(password) {
    console.log(password);
    this.setState({
      password: password
    });
  }
  signInModule = () => {
    return (
      <View
        style={styles.containersin}
        keyboardShouldPersistTaps={"always"}
        keyboardDismissMode="on-drag"
      >
        <StatusBar
          backgroundColor="#000"
          barStyle="light-content"
          animated={true}
        />
        <View style={styles.contanersignin}>
          <Text style={styles.maintext}>Xperos</Text>
          <Text style={styles.maintextnew}>Sign In</Text>
        </View>

        <View style={styles.forminput}>
          <TextField
            autoCapitalize="none"
            label="Email"
            tintColor={"#30A9A7"}
            labelTextStyle={styles.labelColorstyles}
            onSubmitEditing={this.login}
            value={this.state.email}
            keyboardType="email-address"
            textColor={"#000"}
            onChangeText={email => this.email(email)}
          />
          <TextField
            inputContainerStyle={styles.textinputmargin}
            label="Password"
            secureTextEntry={true}
            tintColor={"#30A9A7"}
            labelTextStyle={styles.labelColor}
            value={this.state.password}
            onSubmitEditing={() => this.login()}
            textColor={"#000"}
            onChangeText={password => this.password(password)}
          />

          <TouchableOpacity
            onPress={() => this.login()}
            onSubmitEditing={() => this.login()}
            style={styles.buttonStyleEnable}
          >
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.signUp({ role: "Admin" })}>
            <Text>Sign up as admin</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.signUp({ role: "User" })}>
            <Text>Sign up as user</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  render() {
    return this.signInModule();
  }
}

export default SignInModule;
