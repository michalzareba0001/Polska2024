import 'react-native-gesture-handler';
import * as React from 'react';
import { Image, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import GameBoard from './screens/GameBoard';
import Story from './screens/Story';
import { Audio } from 'expo-av'
import Coffee from './assets/images/cup-of-drink-ico.png'


const Stack = createStackNavigator();

function AppNavigation() {
  const [backgroundMusic, setBackgroundMusic] = useState(null);

  useEffect(()=>{
    const sound = new Audio.Sound();

    const loadSound = async () => {
        try {
            await sound.loadAsync(require('./assets/sounds/Polska2025bgTheme.mp3'));  // Ustawienie ścieżki do pliku mp3
            await sound.setIsLoopingAsync(true);  // Ustawienie zapętlenia dźwięku
            await sound.playAsync();  // Rozpoczęcie odtwarzania dźwięku
            setBackgroundMusic(sound);
        } catch (error) {
            console.error('Błąd przy ładowaniu pliku audio', error);
        }
    };

    loadSound();
  }, [])

  return (
    <NavigationContainer>
      <Image source={Coffee} style={styles.coffeIco}/>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Story" component={Story} options={{headerShown:false}} />
        <Stack.Screen name="GameBoard" component={GameBoard} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  coffeIco: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 999,
  }
})

export default AppNavigation; 
