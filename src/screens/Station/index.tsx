import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import radioStations from "../../data/radioStation";
import { RadioStation } from "../../components/RadioStation";
import { SearchBar } from "../../components/SearchBar";
import styles from "./styles";
import { useState } from "react";

export function Station({ navigation }: any) {
  const [filteredStations, setFilteredStations] = useState(radioStations);

  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = radioStations.filter((station) =>
      station.title.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredStations(filtered);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" />
      <SearchBar onSearch={handleSearch}/>
      <FlatList
        data={filteredStations}
        keyExtractor={(item) => item.freq}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Player", {
                stationData: item,
              })
            }
          >
            <RadioStation
              freq={item.freq}
              title={item.title}
              src={item.src}
              imageSrc="sds"
              navigation={navigation}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
