import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import subtitles from '../data/subtitles'
import { useNavigation } from '@react-navigation/native'
import storyImg from '../assets/images/storyImg.jpeg'
import Coffee from '../assets/images/cup-of-drink-ico.png'
import BuyCoffeeModal from '../components/BuyCoffeeModal';

const Story = () => {
    const navigation = useNavigation()
    const [isModalVisible, setModalVisible] = useState(false);

    const startGamePress = () => {
        navigation.navigate('GameBoard');
    }

    const handleCoffeeIconPress = () => {
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={storyImg} style={styles.backgroundImg}>
                <TouchableOpacity style={styles.CoffeeBtn} onPress={handleCoffeeIconPress}>
                    <Image source={Coffee} style={styles.coffeIco} />
                </TouchableOpacity>
                <View style={styles.upperPart}>
                    <ScrollView style={styles.storyScrollView} showsVerticalScrollIndicator={true}>
                        <Text style={[styles.storyText, styles.boldText]}>{subtitles[0].storyText[0].descText}</Text>
                        <View style={styles.separator}></View>
                        <Text style={styles.storyText}>{subtitles[0].storyText[1].descText}</Text>
                        <View style={styles.separator}></View>
                        <Text style={styles.storyText}>{subtitles[0].storyText[2].descText}</Text>
                        <View style={styles.separator}></View>
                        <Text style={styles.storyText}>{subtitles[0].storyText[3].descText}</Text>
                        <View style={styles.separator}></View>
                        <Text style={styles.storyText}>{subtitles[0].storyText[4].descText}</Text>
                        <View style={styles.separator}></View>
                        <Text style={styles.storyText}>{subtitles[0].storyText[5].descText}</Text>
                        <View style={styles.separator}></View>
                        <Text style={[styles.storyText, styles.boldText]}>{subtitles[0].storyText[6].descText}</Text>
                        <View style={styles.lastSeparator}></View>
                    </ScrollView>
                </View>
                <View style={styles.lowerPart}>
                    <TouchableOpacity onPress={startGamePress} style={styles.startButton}>
                        <Text style={styles.startButtonText}>Zacznij swoje rządy</Text>
                    </TouchableOpacity>
                </View>
                <BuyCoffeeModal isVisible={isModalVisible} onClose={closeModal} content='TREŚĆ MODALU' />
            </ImageBackground>
        </View>
    )
}



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    backgroundImg: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },

    upperPart: {
        height: '70%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    storyScrollView: {
        maxHeight: 200,
        marginTop: '20%',
        width: '90%',
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 40,
        paddingRight: 40,
    },

    separator: {
        height: 16,
    },

    lastSeparator: {
        height: 70,
    },

    lowerPart: {
        height: '30%',
    },

    storyText: {
        fontSize: 16,
        fontWeight: '400',
    },

    boldText: {
        fontWeight: '800',
    },

    startButton: {
        marginTop: 40,
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: '#F60000',
        borderRadius: 10,
    },

    startButtonText: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
    },

    CoffeeBtn: {
        position: 'absolute',
        top: 30,
        right: 20,
        zIndex: 999,
      },
    
      coffeIco: {
        width: 25,
        height: 25,
      }


})

export default Story