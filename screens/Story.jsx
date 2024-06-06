import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import subtitles from '../data/subtitles'
import { useNavigation } from '@react-navigation/native'
import storyImg from '../assets/images/storyImg1.jpeg'
import Coffee from '../assets/images/share-icon.png'
import Info from '../assets/images/info.png'
import BuyCoffeeModal from '../components/BuyCoffeeModal'
import HowToPlayModal from '../components/HowToPlayModal'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-3940256099942544/9214589741';

const Story = () => {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    const [isInfoModalVisible, setInfoModalVisible] = useState(false);

    const startGamePress = () => {
        navigation.navigate('GameBoard');
    }

    const handleCoffeeIconPress = () => {
        setModalVisible(true);
    }

    const handleInfoIconPress = () => {
        setInfoModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    const closeInfoModal = () => {
        setInfoModalVisible(false);
    }

    return (
        <View style={styles.mainContainer} accessibilityLabel="Story Screen">
            <ImageBackground source={storyImg} style={styles.backgroundImg}>
                <TouchableOpacity style={styles.infoBtn} onPress={handleInfoIconPress} accessibilityLabel="Information Button" accessibilityRole="button">
                    <Image source={Info} style={styles.infoIco} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.coffeeBtn} onPress={handleCoffeeIconPress} accessibilityLabel="Buy Coffee Button" accessibilityRole="button">
                    <Image source={Coffee} style={styles.coffeeIco} />
                </TouchableOpacity>
                <View style={styles.upperPart}>
                    <ScrollView style={styles.storyScrollView} showsVerticalScrollIndicator={true}>
                        {subtitles[0].storyText.map((text, index) => (
                            <View key={index}>
                                <Text style={[styles.storyText, text.bold ? styles.boldText : null]}>{text.descText}</Text>
                                <View style={styles.separator}></View>
                            </View>
                        ))}
                        <View style={styles.lastSeparator}></View>
                    </ScrollView>
                </View>
                <View style={styles.lowerPart}>
                    <TouchableOpacity onPress={startGamePress} style={styles.startButton} accessibilityLabel="Start Game Button" accessibilityRole="button">
                        <Text style={styles.startButtonText}>Zacznij swoje rządy</Text>
                    </TouchableOpacity>
                </View>
                <BuyCoffeeModal isVisible={isModalVisible} onClose={closeModal} />
                <HowToPlayModal isVisible={isInfoModalVisible} onClose={closeInfoModal} />
            </ImageBackground>
            <BannerAd
                unitId={adUnitId}
                size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                style={styles.bannerAd}
            />
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
        flex: 1,
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
        maxHeight: 180,
        maxWidth: 500,
        marginTop: 50,
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
        height: 48,
    },

    startButtonText: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
    },

    coffeeBtn: {
        position: 'absolute',
        top: 10,
        right: 20,
        zIndex: 999,
        width: 48,
        height: 48,
    },

    coffeeIco: {
        width: 35,
        height: 35,
    },

    infoBtn: {
        position: 'absolute',
        top: 10,
        left: 20,
        width: 48,
        height: 48,
        zIndex: 999,
    },

    infoIco: {
        width: 35,
        height: 35,
    },

    bannerAd: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Story
