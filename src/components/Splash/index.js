import React from "react";
import { Text, Image, View, StatusBar, AsyncStorage } from "react-native";
import { Actions } from "react-native-router-flux";
import styles from "./styles";

class Splash extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      Actions.header();
    }, 1000);
  }
  render() {
    return (
      <View style={styles.ContainerSplash}>
        <StatusBar
          backgroundColor="#000"
          barStyle="light-content"
          animated={true}
        />
        <Text style={styles.LogoText}>Xperos</Text>
      </View>
    );
  }
}

export default Splash;
