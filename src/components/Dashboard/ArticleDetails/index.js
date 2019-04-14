import React, { Component } from "react";
import { Text, View, WebView } from "react-native";
import styles from "./styles";

export default class ArticleDetails extends Component {
  componentDidMount() {
    console.log(this.props.articleUrl);
  }
  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: this.props.articleUrl }}
          style={{ marginTop: 20 }}
        />
      </View>
    );
  }
}
