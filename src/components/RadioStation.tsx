import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { useState, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function RadioStation({ freq, title, src, imageSrc, navigation }: any) {
  const [isFavorite, setIsFavorite] = useState(false);

  // Adiciona ou remove o item dos favoritos
  const toggleFavorite = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem("favorites");
      const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

      if (isFavorite) {
        // Remove dos favoritos
        const updatedFavorites = favorites.filter((fav: any) => fav.id !== src);
        await AsyncStorage.setItem(
          "favorites",
          JSON.stringify(updatedFavorites)
        );
        setIsFavorite(false);
      } else {
        // Adiciona aos favoritos
        const newFavorite = { id: src, title };
        await AsyncStorage.setItem(
          "favorites",
          JSON.stringify([...favorites, newFavorite])
        );
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Erro ao alternar favorito:", error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: imageSrc}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Frequência: {freq}</Text>
      </View>
      <TouchableOpacity onPress={toggleFavorite} style={styles.button}>
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={28}
          color="#FFF"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    borderRadius: 6,
    backgroundColor: "#063952",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  imageContainer: {
    width: "30%",
    height: "100%",
    marginRight: 2,
    borderRadius: 6
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    borderRadius: 6,
  },
  textContainer: {
    flex: 0.8,
  },
  title: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },
  subtitle: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "500",
  },
  button: {
    marginRight: 20
  },
});
