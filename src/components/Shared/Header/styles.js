import { StyleSheet } from "react-native";

export default StyleSheet.create({
  headerHolder: {
    flexDirection: "row"
  },
  menuHamburger: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  logo: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  toggle: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  logoText: {
    backgroundColor: "#ebf3fe",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 25,
    paddingRight: 25
  }
});
