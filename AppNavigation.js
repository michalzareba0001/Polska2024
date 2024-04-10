import 'react-native-gesture-handler';
import * as React from 'react';
import { Image, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import GameBoard from './screens/GameBoard';
import Story from './screens/Story';
import Coffee from './assets/images/cup-of-drink-ico.png';


const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden/>
    <NavigationContainer>
      <Image source={Coffee} style={styles.coffeIco}/>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Story" component={Story} options={{headerShown:false}} />
        <Stack.Screen name="GameBoard" component={GameBoard} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  coffeIco: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 999,
  }
});

export default AppNavigation;
