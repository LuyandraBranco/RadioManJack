import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { useState, useRef } from 'react';



const RadioPlayer = ({ freq, title, src }: any) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const buttonColorAnimation = useRef(new Animated.Value(0)).current;
    const soundRef = useRef<Audio.Sound | null>(null);

    async function playSound() {
        try {
            if (src) {
                if (isPlaying && soundRef.current) {
                    await soundRef.current.pauseAsync();
                    setIsPlaying(false);
                    // Interrompe a animação
                    buttonColorAnimation.setValue(0);
                } else {
                    const { sound } = await Audio.Sound.createAsync(
                        { uri: src },
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
                                useNativeDriver: false
                            }),
                            Animated.timing(buttonColorAnimation, {
                                toValue: 0,
                                duration: 500,
                                useNativeDriver: false
                            })
                        ])
                    ).start();
                }
            }
        } catch (error) {
            console.error('Erro ao reproduzir o áudio:', error);
        }
    }

    const buttonColor = buttonColorAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['black', '#6666']
    });


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    {title}
                </Text>

                <Text style={styles.subtitle}>
                    Frequência: {freq}
                </Text>
            </View>

            <TouchableOpacity onPress={playSound}>
                {isPlaying ?
                    <Animated.View style={[styles.button, { backgroundColor: buttonColor }]}>
                        <Ionicons
                            name='pause'
                            size={32}
                            color='#FFF'
                        />
                    </Animated.View>
                    :
                    <Animated.View style={[styles.button, { backgroundColor: buttonColor }]}>
                        <Ionicons
                            name='play'
                            size={32}
                            color='#FFF'
                        />
                    </Animated.View>
                }
            </TouchableOpacity>
        </View>
    );
};

export default RadioPlayer;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 112,
        borderWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 6,
        backgroundColor: '#29292E',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 6
    },
    subtitle: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '500'
    },

    button: {
        backgroundColor: 'black',
        borderRadius: 16,
        width: 64,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
    }
})