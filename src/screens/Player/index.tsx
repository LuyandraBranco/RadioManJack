import { Text, TouchableOpacity, View, Image, Animated } from "react-native";
import styles from "./styles";
import {
  ArrowLeft,
  Heart,
  Pause,
  Play,
  SkipBack,
  SkipForward,
} from "phosphor-react-native";
import { SoundWave } from "../../components/SoundWave";
import { useRef, useState } from "react";
import { Audio } from "expo-av";

export function PlayerScreen({ route,navigation }: any) {
  const [isPlaying, setIsPlaying] = useState(false);
  const buttonColorAnimation = useRef(new Animated.Value(0)).current;
  const soundRef = useRef<Audio.Sound | null>(null);

  const { stationData } = route.params;


  async function playSound() {
    try {
      if (stationData.src) {
        if (isPlaying && soundRef.current) {
          await soundRef.current.pauseAsync();
          setIsPlaying(false);
          // Interrompe a animação
          buttonColorAnimation.setValue(0);
        } else {
          const { sound } = await Audio.Sound.createAsync(
            { uri: stationData.src },
            { shouldPlay: true }
          );
          soundRef.current = sound;
          await soundRef.current.playAsync();
          setIsPlaying(true);
          // Inicia a animação
          Animated.loop(
            Animated.sequence([
              Animated.timing(buttonColorAnimation, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
              }),
              Animated.timing(buttonColorAnimation, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
              }),
            ])
          ).start();
        }
      }
    } catch (error) {
      console.error("Erro ao reproduzir o áudio:", error);
    }
  }

  const buttonColor = buttonColorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["black", "#6666"],
  });

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
        <Text style={styles.frequency}>Frequência: {stationData.feq}</Text>
        <Text style={styles.stationName}>{stationData.title}</Text>
      </View>
      <SoundWave />
      <View style={styles.containerPlay}>
        <TouchableOpacity>
          <SkipBack size={24} color="#fff" weight="fill" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={playSound}>
          {isPlaying ? (
            <Animated.View
              style={[styles.button, { backgroundColor: buttonColor }]}
            >
              <Pause size={32} color="#fff" weight="fill" />
            </Animated.View>
          ) : (
            <Animated.View
              style={[styles.button, { backgroundColor: buttonColor }]}
            >
              <Play size={32} color="#fff" weight="fill" />
            </Animated.View>
          )}
        </TouchableOpacity>
        <TouchableOpacity>
          <SkipForward size={24} color="#fff" weight="fill" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
