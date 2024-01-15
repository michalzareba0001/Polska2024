import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import EndGameBg from '../assets/images/endImg.jpeg'

const EndGame = () => {
  return (
    <ImageBackground source={EndGameBg} style={styles.EndGameBg} >

    </ImageBackground>
  )
}

export default EndGame

const styles = StyleSheet.create({
  EndGameBg: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  }
})