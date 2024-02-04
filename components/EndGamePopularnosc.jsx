import { StyleSheet, Text, View} from 'react-native'
import React, {useEffect} from 'react'
import subtitles from '../data/subtitles'

const EndGamePopularnosc = () => {

  useEffect(()=>{
    shuffleYouLosePopularnosc()
  }, [])
 
  const shuffleYouLosePopularnosc = () => {
    const youLosePopularnoscArray = subtitles[0].youLosePopularnosc;
    const randomIndex = Math.floor(Math.random() * youLosePopularnoscArray.length);
    return youLosePopularnoscArray[randomIndex].descText;
};
  const youLosePopularnoscText = shuffleYouLosePopularnosc()


  return (
      <View style={styles.EndGameContainer}>
       <Text style={styles.EndGameTitle}>GRA ZAKOŃCZONA</Text>
      <Text style={styles.EndGameOpis}>{youLosePopularnoscText}</Text>
      </View>
  )
}

export default EndGamePopularnosc

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