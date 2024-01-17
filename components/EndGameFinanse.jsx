import { StyleSheet, Text, View} from 'react-native'
import React from 'react'

const EndGameFinanse = () => {
  return (
      <View style={styles.EndGameContainer}>
      <Text style={styles.EndGameTitle}>GRA ZAKOŃCZONA</Text>
      <Text style={styles.EndGameOpis}>Ponieważ twoje finanse spadły do zera! itp itd lorem ipsum lorem ipsum lorem ipsum lorem ipsum</Text>
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