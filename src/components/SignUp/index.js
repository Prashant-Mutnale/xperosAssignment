import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import SignUpModule from "./signup";
class SignUp extends Component {
  render() {
    return <SignUpModule role={this.props.role} />;
  }
}

export default SignUp;
