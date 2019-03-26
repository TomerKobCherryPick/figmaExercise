import { Platform, StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    width: "91%",
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    alignSelf: "center",
    alignItems: "center"
  },
  box: {
    flex: 1,
    borderWidth: 1.0,
    borderColor: "#D9D9D9",
    height: 100,
    justifyContent: "flex-start"
  },
  purpleView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#812AC1",
    height: 2,
    width: "11.7222%"
  },
  folderAndText: {
    width: "100%",
    paddingTop: 14,
    paddingLeft: 17,
    flexDirection: "row"
  },
  titleText: {
    alignSelf: "flex-end",
    marginHorizontal: 10,
    textAlign: "left",
    flexWrap: "wrap",
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#222326"
  },
  detailViewText: {
    textAlign: "left",
    flexWrap: "wrap",
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#77787B"
  },
  detailView: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: "row",
    position: "absolute",
    left: "16%",
    right: "46.4%",
    bottom: 11,
    alignItems: "center",
    justifyContent: "space-between"
  },

  detailViewSeprator: {
    width: 1,
    height: 10,
    marginHorizontal: 11,
    backgroundColor: "#E2E3E7",
    borderStyle: "solid"
  },
  folderImage: { alignSelf: "flex-start", height: 24, width: 27.5 },
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: Platform.OS === "ios" ? 20 : StatusBar.currentHeight,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default styles;
