import React, { Component } from "react";
import { Text, View, Switch } from "react-native";
import styles from "./styles";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";

export default function ProfileInfo({ toggleTheme }) {
  return (
    <View style={styles.headerHolder}>
      <View style={styles.menuHamburger}>
        <Text>
          <Entypo name="menu" size={30} color="grey" />
        </Text>
      </View>
      <View style={styles.logo}>
        <View>
          <Text style={styles.logoText}>Logo</Text>
        </View>
      </View>
      <View style={styles.toggle}>
        <Text>
          <EvilIcons name="heart" size={30} color="grey" />
        </Text>
      </View>
    </View>
  );
}
