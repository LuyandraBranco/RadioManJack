import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerPlayer: {
    flex: 1,
    backgroundColor: "#031b27",
    justifyContent: "center",
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
    marginTop: 25,
    marginBottom: 20,
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
    width: "95%",
    height: "45%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#141414",
    marginBottom: 30,
   
  },
  image: {
    width: 400,
    height: 200,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
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
    backgroundColor: "#e6742b",
    borderRadius: 40,
  },
  containerText: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 20
  },
  frequency: {
    color: "#fff",
    marginBottom: 4
  }
});
