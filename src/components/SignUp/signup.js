import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  AsyncStorage
} from "react-native";
import { Actions } from "react-native-router-flux";
import { TextField } from "react-native-material-textfield";
// import AsyncStorage from "@react-native-community/async-storage";
import styles from "./styles";
import { firebaseRef } from "../../Firebase/firebase";
class SignUpModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  login() {
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
  }
  componentDidMount() {
    console.log("arr");
  }
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
  componentWillReceiveProps(nextprops) {
    console.log("ma", nextprops);
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
          <Text style={styles.maintextnew}>Sign Up as {this.props.role}</Text>
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
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  render() {
    // return this.signInModule();
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
          <Text style={styles.maintextnew}>Sign Up as {this.props.role}</Text>
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
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SignUpModule;
