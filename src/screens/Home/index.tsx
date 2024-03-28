import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import radioStations from "../../data/radioStation";
import RadioPlayer from "../../components/RadioPlayer";
import styles from "./styles";
import { ButtonTypeStation } from "../../components/ButtonTypeStation";
import { StatusBar } from "expo-status-bar";
import { CardStation } from "../../components/CardStation";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" />
      <Text style={styles.title}>
        Escolha uma estação de rádio que você gosta
      </Text>
      <View style={styles.containerButtons}>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <ButtonTypeStation name="Tendência" />
          <ButtonTypeStation name="Notícias" />
          <ButtonTypeStation name="Desporto" />
          <ButtonTypeStation name="Músicas" />
        </ScrollView>
      </View>
      <View style={styles.cards}>
        <CardStation />
        <CardStation />
      </View>
    </View>
  );
}
