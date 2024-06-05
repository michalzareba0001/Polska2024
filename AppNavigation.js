// AppNavigation.js
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import GameBoard from './screens/GameBoard';
import Story from './screens/Story';
import { AppOpenAd, TestIds } from 'react-native-google-mobile-ads';

const Stack = createStackNavigator();


const adUnitId = __DEV__ ? TestIds.APP_OPEN : 'ca-app-pub-3940256099942544/9257395921';

const AppNavigation = () => {
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    const loadAppOpenAd = async () => {
      try {
        const appOpenAd = AppOpenAd.createForAdRequest(adUnitId, {
          keywords: ['gry', 'games', '2024', '2025', 'Polska', 'Poland', 'fun'],
        });

        await appOpenAd.load();
        setAdLoaded(true);

        // Opcjonalnie wyświetl reklamę, gdy zostanie załadowana
        if (adLoaded) {
          await appOpenAd.show();
        }
      } catch (error) {
        console.warn('Nie udało się załadować reklamy typu App Open', error);
      }
    };

    loadAppOpenAd();

    return () => {
      // Czyszczenie, jeśli to konieczne
    };
  }, []); // Uruchamia się tylko raz po zamontowaniu komponentu

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Story" component={Story} options={{ headerShown: false }} />
        <Stack.Screen name="GameBoard" component={GameBoard} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default AppNavigation;
