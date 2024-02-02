import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import homeImg from '../assets/images/homeImg.jpeg';
import Coffee from '../assets/images/cup-of-drink-ico.png'
import BuyCoffeeModal from '../components/BuyCoffeeModal';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleStartPress = () => {
    navigation.navigate('Story');
  };

  const handleCoffeeIconPress = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={homeImg} style={styles.backgroundImg}>
        <TouchableOpacity style={styles.CoffeeBtn} onPress={handleCoffeeIconPress}>
          <Image source={Coffee} style={styles.coffeIco}/>
        </TouchableOpacity>
        <Text style={styles.title}>Polska 2024</Text>
        <TouchableOpacity onPress={handleStartPress} style={styles.startButton}>
          <Text style={styles.startButtonText}>START</Text>
        </TouchableOpacity>
        <BuyCoffeeModal isVisible={isModalVisible} onClose={closeModal} content='TREŚĆ MODALU' />
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 40,
    fontWeight: '700',
    color: '#ffffff',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },

  startButton: {
    marginTop: 40,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#F60000',
    borderRadius: 10,
  },

  startButtonText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },

  CoffeeBtn: {
    position: 'absolute',
    top: 30,
    right: 20,
    zIndex: 999,
  },

  coffeIco: {
    width: 25,
    height: 25,
  }
});
