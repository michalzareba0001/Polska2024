import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import subtitles from '../data/subtitles'


const EndGameDyplomacja = () => {
  
  useEffect(()=>{
    shuffleYouLoseDyplomacja()
  }, [])
 
  const shuffleYouLoseDyplomacja = () => {
    const youLoseDyplomacjaArray = subtitles[0].youLoseDyplomacja;
    const randomIndex = Math.floor(Math.random() * youLoseDyplomacjaArray.length);
    return youLoseDyplomacjaArray[randomIndex].descText;
};
  const youLoseDyplomacjaText = shuffleYouLoseDyplomacja()

  return (
    <View style={styles.EndGameContainer}>
      <Text style={styles.EndGameTitle}>GRA ZAKOŃCZONA</Text>
      <Text style={styles.EndGameOpis}>{youLoseDyplomacjaText}</Text>
    </View>
  )
}

export default EndGameDyplomacja

const styles = StyleSheet.create({
  EndGameContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  EndGameTitle: {
    fontSize: 20,
    fontWeight: '900'
  },

  EndGameOpis: {
    fontSize: 15,
    paddingLeft: 20,
    paddingRight: 20,
  }

})