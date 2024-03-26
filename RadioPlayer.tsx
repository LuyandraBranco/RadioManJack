import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Audio } from 'expo-av';
import { useState } from 'react';

const RadioPlayer = ({ freq, title, src }: any) => {

    const [isPlaying, setIsPlaying] = useState(false);

    async function playSound() {
        if (src) {
            const { sound } = await Audio.Sound.createAsync(
                {
                    uri: src,
                },
                { shouldPlay: true },
            );
            await sound.playAsync();

            setIsPlaying(true);
        }
    }

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
                    <Ionicons
                        name='pause'
                        size={32}
                        color='#FFF'
                    />
                    :
                    <Ionicons
                        name='play'
                        size={32}
                        color='#FFF'
                    />
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
})