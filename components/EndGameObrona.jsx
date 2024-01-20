import { StyleSheet, Text, View} from 'react-native'
import React, {useEffect} from 'react'
import subtitles from '../data/subtitles'

const EndGameObrona = () => {

  useEffect(()=>{
    shuffleYouLoseObrona()
  }, [])
 
  const shuffleYouLoseObrona = () => {
    const youLoseObronaArray = subtitles[0].youLoseObrona;
    const randomIndex = Math.floor(Math.random() * youLoseObronaArray.length);
    return youLoseObronaArray[randomIndex].descText;
};
  const youLoseObronaText = shuffleYouLoseObrona()

  return (
      <View style={styles.EndGameContainer}>
      <Text style={styles.EndGameTitle}>GRA ZAKOŃCZONA</Text>
      <Text style={styles.EndGameOpis}>{youLoseObronaText}</Text>
      </View>
  )
}

export default EndGameObrona

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