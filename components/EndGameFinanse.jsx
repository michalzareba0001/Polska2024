import { StyleSheet, Text, View} from 'react-native'
import React, {useEffect} from 'react'
import subtitles from '../data/subtitles'

const EndGameFinanse = () => {

  useEffect(()=>{
    shuffleYouLoseFinanse()
  }, [])
 
  const shuffleYouLoseFinanse = () => {
    const youLoseFinanseArray = subtitles[0].youLoseFinanse;
    const randomIndex = Math.floor(Math.random() * youLoseFinanseArray.length);
    return youLoseFinanseArray[randomIndex].descText;
};
  const youLoseFinanseText = shuffleYouLoseFinanse()

  return (
      <View style={styles.EndGameContainer}>
      <Text style={styles.EndGameTitle}>GRA ZAKOŃCZONA</Text>
      <Text style={styles.EndGameOpis}>{youLoseFinanseText}</Text>
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