import React, { Component } from "react";
import { Text, View } from "react-native";
import ExploreModule from "../Explore/Explore";
import Header from "../../Shared/Header";
import styles from "./styles";

export class Explore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ExploreModule />
      </View>
    );
  }
}

export default Explore;
