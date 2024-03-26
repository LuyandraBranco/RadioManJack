import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import RadioPlayer from "./RadioPlayer";

export default function App() {
  const data = [
    {
      freq: "99.1",
      title: "Radio Mais",
      src: "https://radios.justweb.pt/8050/stream/?1685627470876",
    },
    {
      freq: "81.4",
      title: "Radio Escola",
      src: "https://radios.vpn.sapo.pt/AO/radio1.mp3",
    },
    {
      freq: "89.9",
      title: "Radio Lac",
      src: "https://radios.vpn.sapo.pt/AO/radio14.mp3?1685629053605",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Radio ISPTEC</Text>

      <FlatList
        data={data}
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
