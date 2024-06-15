import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import subtitles from '../data/subtitles'
import EndGameFinanseImg from '../assets/images/gameOverFinanse.jpeg'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-7964800900862182/3241555988';

const EndGameFinanse = () => {
  const navigation = useNavigation();

  const restartHandlePress = () => {
    navigation.navigate('Home')
  }

  useEffect(() => {
    shuffleYouLoseFinanse()
  }, [])

  const shuffleYouLoseFinanse = () => {
    const youLoseFinanseArray = subtitles[0].youLoseFinanse;
    const randomIndex = Math.floor(Math.random() * youLoseFinanseArray.length);
    return youLoseFinanseArray[randomIndex].descText;
  };
  const youLoseFinanseText = shuffleYouLoseFinanse()

  return (
    <View style={styles.EndGameContainer} accessibilityLabel="Koniec gry ekran">
      <Image 
        source={EndGameFinanseImg} 
        style={styles.EndGameImg} 
        accessibilityLabel="Obraz końca gry finanse" 
      />
      <Text style={styles.EndGameTitle} accessibilityLabel="Gra zakończona" accessibilityRole="header">
        GRA ZAKOŃCZONA
      </Text>
      <Text style={styles.EndGameOpis} accessibilityLabel={`Opis zakończenia gry: ${youLoseFinanseText}`}>
        {youLoseFinanseText}
      </Text>
      <TouchableOpacity 
        style={styles.RestartBtn} 
        onPress={restartHandlePress}
        accessibilityLabel="Zagraj ponownie"
        accessibilityRole="button"
      >
        <Text style={styles.RestartBtnText}>
          Zagraj ponownie
        </Text>
      </TouchableOpacity>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        accessibilityLabel="Reklama banerowa"
      />
    </View>
  )
}

export default EndGameFinanse

const styles = StyleSheet.create({
  EndGameContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1
  },

  EndGameImg: {
    width: 250,
    height: 250,
    marginBottom: 50,
  },

  EndGameTitle: {
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 20,
  },

  EndGameOpis: {
    fontSize: 17,
    fontWeight: '500',
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    textShadowColor: '#ffffff',
    textShadowOffset: { width: 1, height: 0 },
    textShadowRadius: 15,
  },

  RestartBtn: {
    marginTop: 40,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 10,
  },

  RestartBtnText: {
    color: '#F60000',
    fontSize: 16,
    fontWeight: '600',
  },
  
})