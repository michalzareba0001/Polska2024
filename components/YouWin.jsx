import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import subtitles from '../data/subtitles'
import YouWinImg from '../assets/images/YouWin.jpeg'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-3940256099942544/9214589741';

const YouWin = () => {
  const navigation = useNavigation();

  const restartHandlePress = () => {
    navigation.navigate('Home')
  }

  useEffect(() => {
    shuffleYouWin()
  }, [])

  const shuffleYouWin = () => {
    const youWinArray = subtitles[0].youWin;
    const randomIndex = Math.floor(Math.random() * youWinArray.length);
    return youWinArray[randomIndex].descText;
  };
  
  const youWinText = shuffleYouWin()

  return (
    <View style={styles.EndGameContainer} accessibilityLabel="You Win Screen">
      <Image source={YouWinImg} style={styles.EndGameImg} accessibilityLabel="You Win Image"/>
      <Text style={styles.EndGameTitle} accessibilityRole="header">GRATULACJE</Text>
      <Text style={styles.EndGameTitle} accessibilityRole="header">UDAŁO SIĘ!!!</Text>
      <Text style={styles.EndGameOpis}>{youWinText}</Text>
      <TouchableOpacity style={styles.RestartBtn} onPress={restartHandlePress} accessibilityLabel="Restart Button" accessibilityRole="button">
        <Text style={styles.RestartBtnText}>Zagraj ponownie</Text>
      </TouchableOpacity>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        style={styles.bannerAd}
        accessibilityLabel="Banner Ad"
      />
    </View>
  )
}

export default YouWin

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
    marginBottom: 30,
  },

  EndGameTitle: {
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 0,
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
    marginTop: 20,
  },

  RestartBtn: {
    marginTop: 40,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },

  RestartBtnText: {
    color: '#F60000',
    fontSize: 16,
    fontWeight: '600',
  },

  bannerAd: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
