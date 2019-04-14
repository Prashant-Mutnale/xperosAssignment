import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // container: {
  //   flex: 1,
  //   padding: 15,
  //   backgroundColor: "#fff"
  // },
  card: {
    width: "47%",
    // padding: 5,
    paddingBottom: 0,
    height: 230,
    margin: 4,
    borderTopRightRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.36);",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 3,
    borderWidth: 0,
    backgroundColor: "#fff",
    borderRadius: 5

    // paddingTop: 10,
  },
  cardInner: {
    flexDirection: "column",
    flex: 1,
    padding: 3,
    paddingTop: 7,
    paddingBottom: 0
  },
  cardContent: {
    marginTop: 2,
    paddingLeft: 10
  },
  cardContentHead: {
    marginTop: 5
  },
  starRaitings: {
    flexDirection: "row",
    paddingLeft: 10
  }
});
