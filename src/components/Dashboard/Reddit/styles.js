import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff"
  },
  arrowHolder: {
    position: "absolute",
    right: 6,
    top: 35
  },
  selectBoxHolder: {
    flexDirection: "row",
    paddingBottom: 20
  },
  selectPickerCategory: {
    width: 140,
    marginRight: 10,
    position: "relative",
    marginTop: 10
  },
  selectPickerLimit: {
    width: 100,
    position: "relative",
    marginTop: 10
  },
  pickerText: {
    marginBottom: 10
  }
});
