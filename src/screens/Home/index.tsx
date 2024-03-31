import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import { ButtonTypeStation } from "../../components/ButtonTypeStation";
import { StatusBar } from "expo-status-bar";

import { SearchBar } from "../../components/SearchBar";
import { CardStation } from "../../components/CardStation";
import { useState } from "react";
import radioStations from "../../data/radioStation";

export default function Home({ navigation }: any) {
  const [selectedGenre, setSelectedGenre] = useState("Tendência");

  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre);
  };

  // Filtra as estações de rádio com base no gênero selecionado
  const filteredRadioStations = radioStations.filter(
    (station) => station.genre === selectedGenre
  );

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
          <ButtonTypeStation
            name="Tendência"
            selectedGenre={selectedGenre}
            onGenreSelect={handleGenreSelect}
          />
          <ButtonTypeStation
            name="Notícias"
            selectedGenre={selectedGenre}
            onGenreSelect={handleGenreSelect}
          />
          <ButtonTypeStation
            name="Desporto"
            selectedGenre={selectedGenre}
            onGenreSelect={handleGenreSelect}
          />
          <ButtonTypeStation
            name="Músicas"
            selectedGenre={selectedGenre}
            onGenreSelect={handleGenreSelect}
          />

        </ScrollView>
      </View>
      <Text style={styles.txt}>{selectedGenre}</Text>
      <ScrollView
        contentContainerStyle={styles.cards}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {filteredRadioStations.map((station) => (
          <CardStation
            key={station.title}
            image={station.image}
            stationName={station.title}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </View>
  );
}
