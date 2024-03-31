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

export function RadioStation  ({ freq, title, src, imageSrc, navigation }: any) {
  const [isFavorite, setIsFavorite] = useState(false);

  // Adiciona ou remove o item dos favoritos
  const toggleFavorite = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem("favorites");
      const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

      if (isFavorite) {
        // Remove dos favoritos
        const updatedFavorites = favorites.filter((fav:any) => fav.id !== src);
        await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setIsFavorite(false);
      } else {
        // Adiciona aos favoritos
        const newFavorite = { id: src, title };
        await AsyncStorage.setItem("favorites", JSON.stringify([...favorites, newFavorite]));
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Erro ao alternar favorito:", error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('PlayerScreen')}>
          <Image source={require("../assets/images/kamui.jpg")} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Frequência: {freq}</Text>
      </View>
      <TouchableOpacity onPress={toggleFavorite}>
        <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={28} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 6,
    backgroundColor: "#063952",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  imageContainer: {
    flex: 0.2,
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
  },
  textContainer: {
    flex: 0.6,
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
    backgroundColor: "black",
    borderRadius: 16,
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
  },
});
