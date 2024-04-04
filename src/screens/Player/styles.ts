import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerPlayer: {
    flex: 1,
    backgroundColor: "#031b27",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 56,
  },
  header: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  headerArrow: {
    marginLeft: 15,
  },
  headerHeart: {
    marginRight: 15,
  },
  stationStatus: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
  },
  containerImage: {
    width: "93%",
    height: "35%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
   
  },
  image: {
    width: "100%",
    height: "100%",
  },
  img: {
    flex: 1,
    width: null,
    height: null,
    borderRadius: 6,
  },
  stationName: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "500",
  },
  containerPlay: {
    width: "100%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 100,
  },
  button: {
    width: 65,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1491ce",
    borderRadius: 40,
  },
  containerText: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 60
  },
  frequency: {
    color: "#fff",
    marginBottom: 4
  }
});
