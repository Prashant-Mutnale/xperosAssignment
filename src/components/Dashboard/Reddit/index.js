import React, { Component } from "react";
import { Text, View } from "react-native";
import RedditModule from "./Reddit";
import styles from "./styles";
import Header from "../../Shared/Header";

export class Reddit extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <RedditModule />
      </View>
    );
  }
}

export default Reddit;
