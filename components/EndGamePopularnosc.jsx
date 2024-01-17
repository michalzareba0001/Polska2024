import { StyleSheet, Text, View} from 'react-native'
import React from 'react'

const EndGamePopularnosc = () => {
  return (
      <View style={styles.EndGameContainer}>
      <Text>GAME OVER</Text>
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
  
})