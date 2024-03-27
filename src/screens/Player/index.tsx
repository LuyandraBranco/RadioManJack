import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "./styles";
import {
  ArrowLeft,
  Heart,
  Play,
  SkipBack,
  SkipForward,
} from "phosphor-react-native";
import { SoundWave } from "../../components/SoundWave";

interface PlayerProps {
  stationName: string;
  navigation: any;
}

export function PlayerScreen({ navigation }: any) {
  return (
    <View style={styles.containerPlayer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={22} color="#fff" style={styles.headerArrow} />
        </TouchableOpacity>
        <Text style={styles.stationStatus}>Tocando...</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Heart size={24} color="#fff" style={styles.headerHeart} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerImage}>
        <View style={styles.image}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.img}
          />
        </View>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.frequency}>Frequência: 99.9</Text>
        <Text style={styles.stationName}>Radio Mais</Text>
      </View>
      <SoundWave />
      <View style={styles.containerPlay}>
        <TouchableOpacity>
          <SkipBack size={32} color="#fff" weight="fill" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Play size={32} color="#0c1729" weight="fill" />
        </TouchableOpacity>
        <TouchableOpacity>
          <SkipForward size={32} color="#fff" weight="fill" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
