// FavoritesScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";

const Favorite = ({ navigation }: any) => {
  const [favorites, setFavorites] = useState([]);

  // Carrega os favoritos do armazenamento local quando o componente é montado
  useEffect(() => {
    loadFavorites();
  }, []);

  // Carrega os favoritos do armazenamento local
  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem("favorites");
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error("Erro ao carregar favoritos:", error);
    }
  };

  // Remove um item dos favoritos
  const removeFavorite = async (item: any) => {
    try {
      const updatedFavorites = favorites.filter((fav:any) => fav.id !== item.id);
      await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    } catch (error) {
      console.error("Erro ao remover favorito:", error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" />
      <Text>Favoritos</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item:any) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <TouchableOpacity onPress={() => removeFavorite(item)}>
              <Ionicons name="heart" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Favorite;
