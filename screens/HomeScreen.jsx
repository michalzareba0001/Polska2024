import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import homeImg from '../assets/images/homeImg.jpeg';
import Coffee from '../assets/images/cup-of-drink-ico.png';
import Info from '../assets/images/info.png';
import BuyCoffeeModal from '../components/BuyCoffeeModal';
import HowToPlayModal from '../components/HowToPlayModal';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-3940256099942544/9214589741';


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
        <TouchableOpacity style={styles.infoBtn} onPress={handleInfoIconPress}>
          <Image source={Info} style={styles.infoIco} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.coffeeBtn} onPress={handleCoffeeIconPress}>
          <Image source={Coffee} style={styles.coffeIco} />
        </TouchableOpacity>
        <Text style={styles.title}>Polska 2025</Text>
        <TouchableOpacity onPress={handleStartPress} style={styles.startButton}>
          <Text style={styles.startButtonText}>START</Text>
        </TouchableOpacity>
        <BuyCoffeeModal isVisible={isModalVisible} onClose={closeModal} />
        <HowToPlayModal isVisable={isInfoModalVisible} onClose={closeInfoModal} />
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
  },

  bannerAd: {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  },
  
});
