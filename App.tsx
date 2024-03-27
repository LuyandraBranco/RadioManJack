import { FlatList, StyleSheet, Text, View } from "react-native";
import RadioPlayer from "./RadioPlayer";
import radioStations from "./radioStation";

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Radio Manjack</Text>

      <FlatList
        data={radioStations}
        keyExtractor={(item) => item.freq}
        renderItem={({ item }) => (
          <RadioPlayer freq={item.freq} title={item.title} src={item.src} />
        )}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214",
    justifyContent: "center",
    // alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 56,
  },
  title: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 24,
  },
});
