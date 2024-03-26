import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Howl, Howler } from "howler";

const stations = [
  {
    freq: "99.1",
    title: "Radio Mais",
    src: "https://radios.justweb.pt/8050/stream/?1685627470876",
    howl: null,
  },
  {
    freq: "81.4",
    title: "Radio Escola",
    src: "https://radios.vpn.sapo.pt/AO/radio1.mp3",
    howl: null,
  },
  {
    freq: "89.9",
    title: "Radio Lac",
    src: "https://radios.vpn.sapo.pt/AO/radio14.mp3?1685629053605 ",
    howl: null,
  },
];

const playStation = (index: any) => {
  stopCurrentStation();

  const station = stations[index];
  let sound = station.howl;

  if (!sound) {
    sound = new Howl({
      src: [station.src],
      html5: true,
      format: ["mp3", "aac"],
    });
    stations[index].howl = sound;
    howlInstances.current[index] = sound;
  }

  sound.play();
  setCurrentStationIndex(index);
};

const stopCurrentStation = () => {
  if (currentStationIndex !== null) {
    const sound = howlInstances.current[currentStationIndex];
    if (sound) {
      sound.stop();
    }
    setCurrentStationIndex(null);
  }
};

export default function App() {
  const [currentStationIndex, setCurrentStationIndex] = useState(null);
  const howlInstances = useRef([]);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Rádio ManJack
      </Text>
      {stations.map((station, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => playStation(index)}
          style={{
            padding: 10,
            marginVertical: 5,
            backgroundColor:
              currentStationIndex === index
                ? "rgba(255, 255, 255, 0.33)"
                : "transparent",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {station.freq} - {station.title}
          </Text>
          <Text style={{ fontSize: 14, color: "gray" }}>
            {currentStationIndex === index ? "LIVE" : ""}
          </Text>
          {currentStationIndex === index && (
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <View style={styles.rect} />
              <View style={styles.rect} />
              <View style={styles.rect} />
              <View style={styles.rect} />
              <View style={styles.rect} />
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = {
  rect: {
    width: 10,
    height: 10,
    backgroundColor: "black",
    marginHorizontal: 2,
  },
};
