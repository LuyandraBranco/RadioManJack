import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import { ButtonTypeStation } from "../../components/ButtonTypeStation";
import { StatusBar } from "expo-status-bar";

import { SearchBar } from "../../components/SearchBar";
import { CardStation } from "../../components/CardStation";

export default function Home({ navigation }: any) {
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
          <ButtonTypeStation name="Tendência" />
          <ButtonTypeStation name="Notícias" />
          <ButtonTypeStation name="Desporto" />
          <ButtonTypeStation name="Músicas" />
        </ScrollView>
      </View>
      <Text style={styles.txt}>Têndencia</Text>
      <ScrollView
        contentContainerStyle={styles.cards}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <CardStation
          image="../assets/images/kamui.jpg"
          stationName="Rádios Mais"
          navigation={navigation}
        />
        <CardStation
          image="../../assets/images/kamui.jpg"
          stationName="Rádios Mais"
          navigation={navigation}
        />
        <CardStation
          image="../../assets/images/kamui.jpg"
          stationName="Rádios Mais"
          navigation={navigation}
        />
        <CardStation
          image="../../assets/images/kamui.jpg"
          stationName="Rádios Mais"
          navigation={navigation}
        />
        <CardStation
          image="../assets/images/kamui.jpg"
          stationName="Rádios Mais"
          navigation={navigation}
        />
        <CardStation
          image="../../assets/images/kamui.jpg"
          stationName="Rádios Mais"
        />
        <CardStation
          image="../../assets/images/kamui.jpg"
          stationName="Rádios Mais"
        />
        <CardStation
          image="../../assets/images/kamui.jpg"
          stationName="Rádios Mais"
        />
      </ScrollView>
    </View>
  );
}
