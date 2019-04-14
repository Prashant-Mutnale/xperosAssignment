/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { connect, Provider } from "react-redux";
import store from "./src/redux/store";
import { Actions, Scene, Router, NavBar } from "react-native-router-flux";
import SignIn from "./src/components/SignIn";
import SignUp from "./src/components/SignUp";
import Splash from "./src/components/Splash";
import Explore from "./src/components/Dashboard/Explore";
import ArticleDetails from "./src/components/Dashboard/ArticleDetails/";
import Reddit from "./src/components/Dashboard/Reddit";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

type Props = {};
export default class App extends Component<Props> {
  render() {
    const RouterWithRedux = connect()(Router);
    const scenes = Actions.create(
      <Scene key="root">
        <Scene
          key="Splash"
          title={"Splash"}
          component={Splash}
          hideNavBar={true}
          initial
        />
        <Scene key="signIn" component={SignIn} hideNavBar={true} />
        <Scene key="signUp" component={SignUp} title={"Sign up"} />
        <Scene
          tabs={true}
          key="header"
          hideNavBar={true}
          forceRenderTabPanel={true}
          gesturesEnabled={false}
          headerMode="none"
          wrap={false}
          indicatorStyle={styles.indicatorStyle}
          tabBarStyle={{ backgroundColor: "fff" }}
          tabBarPosition="bottom"
          activeTintColor="#000"
          inactiveTintColor="#000"
        >
          <Scene
            key="explore"
            icon={({ focused }) => (
              <MaterialIcons
                size={18}
                color={focused ? "red" : "rgba(255, 255, 255, 0.8)"}
                name={`explore`}
              />
            )}
            component={Explore}
            hideNavBar={true}
          />
          <Scene
            key="reddit"
            icon={({ focused }) => (
              <FontAwesome
                size={18}
                color={focused ? "red" : "rgba(255, 255, 255, 0.8)"}
                name={`reddit`}
              />
            )}
            component={Reddit}
            hideNavBar={true}
          />
        </Scene>
        <Scene
          key="articleDetails"
          component={ArticleDetails}
          title={"ArticleDetails"}
        />
      </Scene>
    );
    return (
      <Provider store={store}>
        <RouterWithRedux scenes={scenes} />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
