import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import homeImg from '../assets/images/homeImg.jpeg';
import Coffee from '../assets/images/share-icon.png';
import Info from '../assets/images/info.png';
import BuyCoffeeModal from '../components/BuyCoffeeModal';
import HowToPlayModal from '../components/HowToPlayModal';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-7964800900862182/3241555988';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isInfoModalVisible, setInfoModalVisible] = useState(false);
  
  const handleStartPress = () => {
    navigation.navigate('Story');
  };

  const handleCoffeeIconPress = () => {
    setModalVisible(true);
  };

  const handleInfoIconPress = () => {
    console.log('Modal się otwiera')
    setInfoModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const closeInfoModal = () => {
    setInfoModalVisible(false);
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={homeImg} style={styles.backgroundImg}>
        <TouchableOpacity 
          style={styles.infoBtn} 
          onPress={handleInfoIconPress}
          accessibilityLabel="Informacje"
          accessibilityRole="button"
        >
          <Image 
            source={Info} 
            style={styles.infoIco} 
            accessibilityLabel="Ikona informacji"
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.coffeeBtn} 
          onPress={handleCoffeeIconPress}
          accessibilityLabel="Udostępnij"
          accessibilityRole="button"
        >
          <Image 
            source={Coffee} 
            style={styles.coffeIco} 
            accessibilityLabel="Ikona udostępniania"
          />
        </TouchableOpacity>
        <Text 
          style={styles.title}
          accessibilityLabel="Polska 2025"
          accessibilityRole="header"
        >
          Polska 2024
        </Text>
        <TouchableOpacity 
          onPress={handleStartPress} 
          style={styles.startButton}
          accessibilityLabel="Rozpocznij"
          accessibilityRole="button"
        >
          <Text style={styles.startButtonText}>START</Text>
        </TouchableOpacity>
        <BuyCoffeeModal isVisible={isModalVisible} onClose={closeModal} />
        <HowToPlayModal isVisible={isInfoModalVisible} onClose={closeInfoModal} />
      </ImageBackground>
      <BannerAd 
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        style={styles.bannerAd}
      />
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
    flex: 1,
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
    height: 48,
  },
  startButtonText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  coffeeBtn: {
    position: 'absolute',
    top: 10,
    right: 20,
    zIndex: 999,
    width: 48,
    height:48,
  },
  coffeIco: {
    width: 35,
    height: 35,
  },
  infoBtn: {
    position: 'absolute',
    top: 10,
    left: 20,
    width: 48,
    height: 48,
    zIndex: 999,
  },
  infoIco: {
    width: 35,
    height: 35,
    zIndex: 999,
  },
  bannerAd: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
