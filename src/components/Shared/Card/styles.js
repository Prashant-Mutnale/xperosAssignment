import { StyleSheet } from "react-native";

export default StyleSheet.create({
  categoryCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.19)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 1,
    borderRadius: 10,
    padding: 4,
    marginBottom: 10
    // marginTop: 50
  },
  categoryCardImage: {
    flex: 1
  },
  categoryCardContent: {
    flex: 5,
    flexDirection: "column",
    paddingTop: 8,
    paddingLeft: 10
  },
  categoryView: {
    flexDirection: "row",
    marginTop: 20
  },
  categoryLikeHolder: {
    flex: 1,
    flexDirection: "row"
  },
  categoryLikeIcons: {
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  categoryCardThumbnailImage: {
    flexShrink: 1,
    flex: 1,
    width: null
  },
  categoryCardThumbnailHolder: {
    width: 70,
    height: 70,
    borderRadius: 4,
    overflow: "hidden"
  },
  viewButton: {
    borderWidth: 1,
    borderColor: "grey",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
});
