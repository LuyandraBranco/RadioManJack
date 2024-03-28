import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#202028",
        paddingHorizontal: 24,
        paddingTop: 56,
      },
      title: {
        color: "#FFF",
        fontSize: 25,
        fontWeight: "700",
        marginBottom: 24,
      },
      containerButtons: {
        width: "100%",
        height: 50,
        flexDirection: "row"
      },
      cards: {
        width: "100%",
        height: "auto",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }
});
