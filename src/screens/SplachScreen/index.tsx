import {View, Text, Image} from 'react-native';
import styles from './styles';
import {useState, useEffect} from 'react';

export function SplachScreen({navigation}: any) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Tabs', { screen: 'Home' });
    }, 4000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <View style={[styles.containeSplach]}>
      <View style={[styles.imageContainer]}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.imagem}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}


SplachScreen.navigationOptions = {
  tabBarLabel: () => null,
  tabBarIcon: () => null,
};