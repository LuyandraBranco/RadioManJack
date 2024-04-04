import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import { ButtonTypeStation } from "../../components/ButtonTypeStation";
import { StatusBar } from "expo-status-bar";

import { SearchBar } from "../../components/SearchBar";
import { CardStation } from "../../components/CardStation";
import { useState } from "react";
import radioStations from "../../data/radioStation";
import { stationNames } from "../../data/stationNames";

interface Station {
  freq: string;
  title: string;
  src: string;
  country: string;
  genre: string;
  image: string;
}

export default function Home({ navigation }: any) {
  const [selectedGenre, setSelectedGenre] = useState("Tendência");

  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre);
  };

  // Filtra as estações de rádio com base no gênero selecionado
  const filteredRadioStations = radioStations.filter(
    (station) => station.genre === selectedGenre
  );

  console.log(filteredRadioStations)

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" />
      <SearchBar />
      <View style={styles.containerButtons}>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {stationNames.map((name, index) => (
            <ButtonTypeStation
              key={index}
              name={name}
              selectedGenre={selectedGenre}
              onGenreSelect={handleGenreSelect}
            />
          ))}
        </ScrollView>
      </View>
      <Text style={styles.txt}>{selectedGenre}</Text>
      <ScrollView
        contentContainerStyle={styles.cards}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {filteredRadioStations.map((station: Station) => (
          
          <CardStation
            key={station.title}
            image={station.image}
            stationName={station.title}
            onPress={() =>
              navigation.navigate("Player", {
                stationData: station,
              })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
}
