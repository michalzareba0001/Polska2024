import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Animated } from 'react-native';
import questions from '../data/questions';
import gameboardBg from '../assets/images/gameboardBg.jpg';
import finanseIco from '../assets/images/finanse-ico.png';
import popularnoscIco from '../assets/images/popularnosc-ico.png';
import obronaIco from '../assets/images/obrona-ico.png';
import dyplomacjaIco from '../assets/images/dyplomacja.png';
import EndGameFinanse from '../components/EndGameFinanse';
import EndGameObrona from '../components/EndGameObrona';
import EndGamePopularnosc from '../components/EndGamePopularnosc';
import EndGameDyplomacja from '../components/EndGameDyplomacja';
import YouWin from '../components/YouWin';
import subtitles from '../data/subtitles';
import Coffee from '../assets/images/cup-of-drink-ico.png';
import Info from '../assets/images/info.png';
import BuyCoffeeModal from '../components/BuyCoffeeModal';
import HowToPlayModal from '../components/HowToPlayModal';
import SoundIco from '../assets/images/sound-ico.png';
import NoSoundIco from '../assets/images/no-sound-ico.png';
import { Audio } from 'expo-av';

const GameBoard = () => {
    const fadeInAnim = useRef(new Animated.Value(0)).current;
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const [finanse, setFinanse] = useState(Math.floor(Math.random() * (50 - 30 + 1)) + 30);
    const [popularnosc, setPopularnosc] = useState(Math.floor(Math.random() * (50 - 30 + 1)) + 30);
    const [obrona, setObrona] = useState(Math.floor(Math.random() * (50 - 30 + 1)) + 30);
    const [dyplomacja, setDyplomacja] = useState(Math.floor(Math.random() * (50 - 30 + 1)) + 30);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [shuffledQuestions, setShuffledQuestions] = useState(shuffled);
    const [isModalVisible, setModalVisible] = useState(false);
    const [displayDate, setDisplayDate] = useState('styczeń 2025');
    const [pointsForCurrentQuestion, setPointsForCurrentQuestion] = useState({
        finanse: 0,
        popularnosc: 0,
        obrona: 0,
        dyplomacja: 0,
    });
    const [isInfoModalVisible, setInfoModalVisible] = useState(false);
    const [isSoundPlaying, setSoundPlaying] = useState(true);
    const [sound, setSound] = useState();

    
    useEffect(() => {
        const loadSound = async () => {
            const { sound } = await Audio.Sound.createAsync(require('../assets/sounds/Polska2025bgTheme.mp3'), { shouldPlay: true, isLooping: true });
            setSound(sound);
        };
    
        if (!sound) {
            loadSound();
        }
    
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, [sound]);

    useEffect(() => {
        

        if (finanse > 100) {
            setFinanse(100);
        }

        if (popularnosc > 100) {
            setPopularnosc(100);
        }

        if (obrona > 100) {
            setObrona(100);
        }

        if (dyplomacja > 100) {
            setDyplomacja(100);
        }

        if (finanse < 0) {
            setFinanse(0);
        }

        if (popularnosc < 0) {
            setPopularnosc(0);
        }

        if (obrona < 0) {
            setObrona(0);
        }

        if (dyplomacja < 0) {
            setDyplomacja(0);
        }
    }, [finanse, popularnosc, obrona, dyplomacja]);

    const startAnimation = () => {
        Animated.sequence([
            Animated.timing(fadeInAnim, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const Calendar = () => {
        const months = [
            'Styczeń',
            'Luty',
            'Marzec',
            'Kwiecień',
            'Maj',
            'Czerwiec',
            'Lipiec',
            'Sierpień',
            'Wrzesień',
            'Październik',
            'Listopad',
            'Grudzień',
        ];

        const monthIndex = Math.floor(currentQuestion / 4);
        const year = currentQuestion < 48 ? '2025' : '2026';

        setDisplayDate(`${months[monthIndex]} ${year}`);
    };

    useEffect(() => {
        if (finanse <= 25) {
            startAnimation();
        }
    }, [finanse]);

    const handleAnswer = (points) => {
        setFinanse(finanse + points.finanse);
        setPopularnosc(popularnosc + points.popularnosc);
        setObrona(obrona + points.obrona);
        setDyplomacja(dyplomacja + points.dyplomacja);

        setPointsForCurrentQuestion(points);

        setCurrentQuestion(currentQuestion + 1);

        setTimeout(() => {
            setPointsForCurrentQuestion({
                finanse: 0,
                popularnosc: 0,
                obrona: 0,
                dyplomacja: 0,
            });
        }, 2000);

        Calendar();
    };

    const handleCoffeeIconPress = () => {
        setModalVisible(true);
    };

    const handleInfoIconPress = () => {
        setInfoModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const closeInfoModal = () => {
        setInfoModalVisible(false);
    };

    const shouldDisplayWarning = (value) => {
        return value <= 25;
    };

    let displayedWarning = null;

    // if (shouldDisplayWarning(finanse)) {
    //     const finanseLowArray = subtitles[0].finanseLow;
    //     const randomIndex = Math.floor(Math.random() * finanseLowArray.length);
    //     const warningFinanseLow = finanseLowArray[randomIndex].descText;

    //     displayedWarning = (
    //         <Animated.Text style={[styles.Warning, { opacity: fadeInAnim }]}>
    //             {warningFinanseLow}
    //         </Animated.Text>
    //     );
    // }

    const handleSoundIconPress = async () => {
        if (sound) {
            if (isSoundPlaying) {
                await sound.pauseAsync();
            } else {
                await sound.playAsync();
            }
            setSoundPlaying(!isSoundPlaying);
        }
    };

    return (
        <ImageBackground source={gameboardBg} style={styles.backgroundImg}>
            <TouchableOpacity style={styles.infoBtn} onPress={handleInfoIconPress} accessibilityLabel='how to play button'>
                <Image source={Info} style={styles.infoIco} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.CoffeeBtn} onPress={handleCoffeeIconPress} accessibilityLabel='buy us coffe button'>
                <Image source={Coffee} style={styles.coffeIco} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.soundBtn} onPress={handleSoundIconPress} accessibilityLabel='start/stop music'>
                {isSoundPlaying ? <Image source={NoSoundIco} style={styles.soundIco} /> : <Image source={SoundIco} style={styles.soundIco} />}
            </TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.upperSection}>
                    {currentQuestion <= 48 && finanse >= 1 && popularnosc >= 1 && obrona >= 1 && dyplomacja >= 1 ? (
                        <>
                            <Text style={styles.dataText}>{displayDate}</Text>
                            <View style={styles.ImageAndWarning}>
                                <Image source={shuffledQuestions[currentQuestion].image} style={styles.image} />
                                {displayedWarning}
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.questionText}>{shuffledQuestions[currentQuestion].questionText}</Text>
                            </View>
                            {shuffledQuestions[currentQuestion].answers.map((answer, index) => (
                                <TouchableOpacity style={styles.answerBtn} key={index} onPress={() => handleAnswer(answer.points)}>
                                    <Text style={styles.answerBtnText}>{answer.text}</Text>
                                </TouchableOpacity>
                            ))}
                        </>
                    ) : currentQuestion <= 48 && finanse < 1 ? (
                        <EndGameFinanse />
                    ) : currentQuestion <= 48 && popularnosc < 1 ? (
                        <EndGamePopularnosc />
                    ) : currentQuestion <= 48 && obrona < 1 ? (
                        <EndGameObrona />
                    ) : currentQuestion <= 48 && dyplomacja < 1 ? (
                        <EndGameDyplomacja />
                    ) : (
                        <YouWin />
                    )}
                </View>
                <View style={styles.lowerSection}>
                    <View style={styles.pictureContainer}>
                        <Image source={finanseIco} style={styles.scoreIcon} />
                        <Text style={styles.lowerSectionText}>{finanse}%</Text>
                        <View
                            style={{
                                height: `${finanse}%`,
                                backgroundColor: '#ffffff80',
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                opacity: 0.9,
                            }}
                        ></View>
                        <Text
                            style={{
                                ...styles.scoreDiff,
                                color: pointsForCurrentQuestion.finanse > 0 ? 'green' : pointsForCurrentQuestion.finanse < 0 ? 'red' : 'black',
                                opacity: pointsForCurrentQuestion.finanse === 0 ? 0 : 1,
                            }}
                        >
                            {pointsForCurrentQuestion.finanse > 0 ? `+${pointsForCurrentQuestion.finanse}` : pointsForCurrentQuestion.finanse}
                        </Text>
                    </View>
                    <View style={styles.pictureContainer}>
                        <Image source={popularnoscIco} style={styles.scoreIcon} />
                        <Text style={styles.lowerSectionText}>{popularnosc}%</Text>
                        <View
                            style={{
                                height: `${popularnosc}%`,
                                backgroundColor: '#ffffff70',
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                opacity: 0.9,
                            }}
                        ></View>
                        <Text
                            style={{
                                ...styles.scoreDiff,
                                color: pointsForCurrentQuestion.popularnosc > 0 ? 'green' : pointsForCurrentQuestion.popularnosc < 0 ? 'red' : 'black',
                                opacity: pointsForCurrentQuestion.popularnosc === 0 ? 0 : 1,
                            }}
                        >
                            {pointsForCurrentQuestion.popularnosc > 0 ? `+${pointsForCurrentQuestion.popularnosc}` : pointsForCurrentQuestion.popularnosc}
                        </Text>
                    </View>
                    <View style={styles.pictureContainer}>
                        <Image source={obronaIco} style={styles.scoreIcon} />
                        <Text style={styles.lowerSectionText}>{obrona}%</Text>
                        <View
                            style={{
                                height: `${obrona}%`,
                                backgroundColor: '#ffffff80',
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                opacity: 0.9,
                            }}
                        ></View>
                        <Text
                            style={{
                                ...styles.scoreDiff,
                                color: pointsForCurrentQuestion.obrona > 0 ? 'green' : pointsForCurrentQuestion.obrona < 0 ? 'red' : 'black',
                                opacity: pointsForCurrentQuestion.obrona === 0 ? 0 : 1,
                            }}
                        >
                            {pointsForCurrentQuestion.obrona > 0 ? `+${pointsForCurrentQuestion.obrona}` : pointsForCurrentQuestion.obrona}
                        </Text>
                    </View>
                    <View style={styles.pictureContainer}>
                        <Image source={dyplomacjaIco} style={styles.scoreIcon} />
                        <Text style={styles.lowerSectionText}>{dyplomacja}%</Text>
                        <View
                            style={{
                                height: `${dyplomacja}%`,
                                backgroundColor: '#ffffff70',
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                opacity: 0.9,
                            }}
                        ></View>
                        <Text
                            style={{
                                ...styles.scoreDiff,
                                color: pointsForCurrentQuestion.dyplomacja > 0 ? 'green' : pointsForCurrentQuestion.dyplomacja < 0 ? 'red' : 'black',
                                opacity: pointsForCurrentQuestion.dyplomacja === 0 ? 0 : 1,
                            }}
                        >
                            {pointsForCurrentQuestion.dyplomacja > 0 ? `+${pointsForCurrentQuestion.dyplomacja}` : pointsForCurrentQuestion.dyplomacja}
                        </Text>
                    </View>
                </View>
            </View>
            <BuyCoffeeModal isVisible={isModalVisible} onClose={closeModal} />
            <HowToPlayModal isVisable={isInfoModalVisible} onClose={closeInfoModal} />
        </ImageBackground>
    );
};

export default GameBoard;
    


const styles = StyleSheet.create({
    dataText: {
        color: '#fff',
        marginTop: 15,
        fontSize: 16,
        fontWeight: '900',
        textTransform: 'uppercase',
    },

    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: 20,
    },

    upperSection: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    lowerSection: {
        borderTopColor: '#ccc',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'row',
        height: 80,
    },

    pictureContainer: {
        height: '100%',
        width: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    lowerSectionText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#ffffff'
    },



    textContainer: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
    },

    answerBtn: {
        width: '95%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 9,
        padding: 9,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        borderColor: '#F60000',
        borderWidth: 1,
    },

    answerBtnText: {
        fontSize: 13,
        color: '#000000',
        fontWeight: '700',
        textAlign: 'center',
    },

    questionText: {
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 20,
        textShadowColor: '#FFFFFF80',
        textShadowRadius: 10,
    },

    endGameText: {
        fontSize: 16,
        fontWeight: '700',
        marginTop: '50%',
    },

    backgroundImg: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scoreIcon: {
        width: 40,
        height: 40,
        zIndex: 500,
        alignSelf: 'center',
        opacity: 1,
    },
    scoreDiff: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        fontWeight: '900',
    },

    ImageAndWarning: {
        position: 'relative',
        width: '100%',
    },

    image: {
        width: '100%',
        height: 230,
        resizeMode: 'cover',
        marginBottom: 10,
        marginTop: 10,
    },

    Warning: {
        position: 'absolute',
        bottom: 20,
        textAlign: 'center',
        width: '100%',
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
        textShadowColor: '#fff',
        textShadowRadius: 20,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: '#f6000080',
    },

    CoffeeBtn: {
        position: 'absolute',
        top: 30,
        right: 20,
        zIndex: 999,
    },

    coffeIco: {
        width: 30,
        height: 30,
    },

    infoBtn: {
        position: 'absolute',
        top: 30,
        left: 20,
        zIndex: 999,
    },

    infoIco: {
        width: 30,
        height: 30,
    },

    soundBtn: {
        position: 'absolute',
        top: 30,
        left: 60,
        zIndex: 999,
      },

      soundIco: { 
        width: 30,
        height: 30,
      },

});

