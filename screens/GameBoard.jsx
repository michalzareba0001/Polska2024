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
import subtitles from '../data/subtitles'
import Coffee from '../assets/images/cup-of-drink-ico.png'
import BuyCoffeeModal from '../components/BuyCoffeeModal';


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

    //zakres punktów
    if (finanse > 100) {
        setFinanse(100)
    }

    if (popularnosc > 100) {
        setPopularnosc(100)
    }

    if (obrona > 100) {
        setObrona(100)
    }

    if (dyplomacja > 100) {
        setDyplomacja(100)
    }

    if (finanse < 0) {
        setFinanse(0)
    }

    if (popularnosc < 0) {
        setPopularnosc(0)
    }

    if (obrona < 0) {
        setObrona(0)
    }

    if (dyplomacja < 0) {
        setDyplomacja(0)
    }

    const startAnimation = () => {
        Animated.sequence([
            // Zwiększ opacity
            Animated.timing(fadeInAnim, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const Calendar = () => {

        if (currentQuestion < 4) {
            setDisplayDate('Styczeń 2025')
        }
        else if (currentQuestion >= 4 && currentQuestion < 8) {
            setDisplayDate('Luty 2025')
        }
        else if (currentQuestion >= 8 && currentQuestion < 12) {
            setDisplayDate('Marzec 2025')
        }
        else if (currentQuestion >= 12 && currentQuestion < 16) {
            setDisplayDate('Kwiecień 2025')
        }
        else if (currentQuestion >= 16 && currentQuestion < 20) {
            setDisplayDate('Maj 2025')
        }
        else if (currentQuestion >= 20 && currentQuestion < 24) {
            setDisplayDate('Czerwiec 2025')
        }
        else if (currentQuestion >= 24 && currentQuestion < 28) {
            setDisplayDate('Lipiec 2025')
        }
        else if (currentQuestion >= 28 && currentQuestion < 32) {
            setDisplayDate('Sierpień 2025')
        }
        else if (currentQuestion >= 32 && currentQuestion < 36) {
            setDisplayDate('Wrzesień 2025')
        }
        else if (currentQuestion >= 36 && currentQuestion < 40) {
            setDisplayDate('Październik 2025')
        }
        else if (currentQuestion >= 40 && currentQuestion < 44) {
            setDisplayDate('Listopad 2025')
        }
        else if (currentQuestion >= 44 && currentQuestion < 48) {
            setDisplayDate('Grudzień 2025')
        }
        else {
            setDisplayDate('2026')
        }

    }


    useEffect(() => {

        shuffleYouWin()


        if (finanse <= 25) {
            shuffleWarningFinanse()
            startAnimation()
        }
        if (popularnosc <= 25) {
            shuffleWarningPopularnosc()
        }
        if (obrona <= 25) {
            shuffleWarningObrona()
        }
        if (dyplomacja <= 25) {
            shuffleWarningDyplomacja()
        }


    }, [finanse, popularnosc, obrona, dyplomacja]);



    const handleAnswer = (points) => {
        setFinanse(finanse + points.finanse);
        setPopularnosc(popularnosc + points.popularnosc);
        setObrona(obrona + points.obrona);
        setDyplomacja(dyplomacja + points.dyplomacja);


        // Zapisz punkty zdobyte w aktualnym pytaniu
        setPointsForCurrentQuestion({
            finanse: points.finanse,
            popularnosc: points.popularnosc,
            obrona: points.obrona,
            dyplomacja: points.dyplomacja,
        });


        // Przejdź do następnego pytania
        setCurrentQuestion(currentQuestion + 1);

        setTimeout(() => {
            setPointsForCurrentQuestion({
                finanse: 0,
                popularnosc: 0,
                obrona: 0,
                dyplomacja: 0,
            });
        }, 2000);

        Calendar()

    };

    const handleCoffeeIconPress = () => {
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    const shuffleWarningFinanse = () => {
        const finanseLowArray = subtitles[0].finanseLow;
        const randomIndex = Math.floor(Math.random() * finanseLowArray.length);
        return finanseLowArray[randomIndex].descText;
    };

    const shuffleWarningPopularnosc = () => {
        const popularnoscLowArray = subtitles[0].popularnoscLow;
        const randomIndex = Math.floor(Math.random() * popularnoscLowArray.length);
        return popularnoscLowArray[randomIndex].descText;
    };

    const shuffleWarningObrona = () => {
        const obronaLowArray = subtitles[0].obronaLow;
        const randomIndex = Math.floor(Math.random() * obronaLowArray.length);
        return obronaLowArray[randomIndex].descText;
    };

    const shuffleWarningDyplomacja = () => {
        const dyplomacjaLowArray = subtitles[0].dyplomacjaLow;
        const randomIndex = Math.floor(Math.random() * dyplomacjaLowArray.length);
        return dyplomacjaLowArray[randomIndex].descText;
    };

    const shuffleYouWin = () => {
        const youWinArray = subtitles[0].youWin;
        const randomIndex = Math.floor(Math.random() * youWinArray.length);
        return youWinArray[randomIndex].descText;
    };

    const warningFinanseLow = shuffleWarningFinanse();
    const warningPopularnoscLow = shuffleWarningPopularnosc();
    const warningObronaLow = shuffleWarningObrona();
    const warningDyplomacjaLow = shuffleWarningDyplomacja();
    const youWinText = shuffleYouWin();

    const shouldDisplayWarning = (value, points) => {
        return value <= 25 && points < 0;
    };

    let displayedWarning = null;

    if (shouldDisplayWarning(finanse, pointsForCurrentQuestion.finanse)) {
        displayedWarning = (
            <Animated.Text style={[styles.Warning, { opacity: fadeInAnim }]}>
                {warningFinanseLow}
            </Animated.Text>
        );
    } else if (shouldDisplayWarning(popularnosc, pointsForCurrentQuestion.popularnosc)) {
        displayedWarning = (
            <Animated.Text style={[styles.Warning, { opacity: fadeInAnim }]}>
                {warningPopularnoscLow}
            </Animated.Text>
        );
    } else if (shouldDisplayWarning(obrona, pointsForCurrentQuestion.obrona)) {
        displayedWarning = (
            <Animated.Text style={[styles.Warning, { opacity: fadeInAnim }]}>
                {warningObronaLow}
            </Animated.Text>
        );
    } else if (shouldDisplayWarning(dyplomacja, pointsForCurrentQuestion.dyplomacja)) {
        displayedWarning = (
            <Animated.Text style={[styles.Warning, { opacity: fadeInAnim }]}>
                {warningDyplomacjaLow}
            </Animated.Text>
        );
    }

    return (
        <ImageBackground source={gameboardBg} style={styles.backgroundImg}>
            <TouchableOpacity style={styles.CoffeeBtn} onPress={handleCoffeeIconPress}>
                <Image source={Coffee} style={styles.coffeIco} />
            </TouchableOpacity>
            <View style={styles.container}>
                {/* Górna część - Pytania */}
                <View style={styles.upperSection}>


                    {currentQuestion < shuffledQuestions.length && finanse >= 1 && popularnosc >= 1 && obrona >= 1 && dyplomacja >= 1 ? (
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
                    ) : currentQuestion < shuffledQuestions.length && finanse < 1 ? (
                        <EndGameFinanse />
                    ) : currentQuestion < shuffledQuestions.length && popularnosc < 1 ? (
                        <EndGamePopularnosc />
                    ) : currentQuestion < shuffledQuestions.length && obrona < 1 ? (
                        <EndGameObrona />
                    ) : currentQuestion < shuffledQuestions.length && dyplomacja < 1 ? (
                        <EndGameDyplomacja />
                    ) : (
                        <Text style={styles.endGameText}>
                            {youWinText}
                        </Text>
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
                            }}>
                        </View>
                        <Text style={{
                            ...styles.scoreDiff,
                            color: pointsForCurrentQuestion.finanse > 0 ? 'green' : (pointsForCurrentQuestion.finanse < 0 ? 'red' : 'black'),
                            opacity: pointsForCurrentQuestion.finanse === 0 ? 0 : 1
                        }}>
                            {pointsForCurrentQuestion.finanse > 0 ? `+${pointsForCurrentQuestion.finanse}` : pointsForCurrentQuestion.finanse}
                        </Text>
                    </View>
                    <View style={styles.pictureContainer}>
                        <Image source={popularnoscIco} style={styles.scoreIcon} />
                        <Text style={styles.lowerSectionText}>{popularnosc}%</Text>
                        <View style={{
                            height: `${popularnosc}%`,
                            backgroundColor: '#ffffff70',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            opacity: 0.9
                        }}>
                        </View>
                        <Text style={{
                            ...styles.scoreDiff,
                            color: pointsForCurrentQuestion.popularnosc > 0 ? 'green' : (pointsForCurrentQuestion.popularnosc < 0 ? 'red' : 'black'),
                            opacity: pointsForCurrentQuestion.popularnosc === 0 ? 0 : 1
                        }}>
                            {pointsForCurrentQuestion.popularnosc > 0 ? `+${pointsForCurrentQuestion.popularnosc}` : pointsForCurrentQuestion.popularnosc}
                        </Text>
                    </View>
                    <View style={styles.pictureContainer}>
                        <Image source={obronaIco} style={styles.scoreIcon} />
                        <Text style={styles.lowerSectionText}>{obrona}%</Text>
                        <View style={{
                            height: `${obrona}%`,
                            backgroundColor: '#ffffff80',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            opacity: 0.9
                        }}>
                        </View>
                        <Text style={{
                            ...styles.scoreDiff,
                            color: pointsForCurrentQuestion.obrona > 0 ? 'green' : (pointsForCurrentQuestion.obrona < 0 ? 'red' : 'black'),
                            opacity: pointsForCurrentQuestion.obrona === 0 ? 0 : 1
                        }}>
                            {pointsForCurrentQuestion.obrona > 0 ? `+${pointsForCurrentQuestion.obrona}` : pointsForCurrentQuestion.obrona}
                        </Text>
                    </View>
                    <View style={styles.pictureContainer}>
                        <Image source={dyplomacjaIco} style={styles.scoreIcon} />
                        <Text style={styles.lowerSectionText}>{dyplomacja}%</Text>
                        <View style={{
                            height: `${dyplomacja}%`,
                            backgroundColor: '#ffffff70',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            opacity: 0.9
                        }}>
                        </View>
                        <Text style={{
                            ...styles.scoreDiff,
                            color: pointsForCurrentQuestion.dyplomacja > 0 ? 'green' : (pointsForCurrentQuestion.dyplomacja < 0 ? 'red' : 'black'),
                            opacity: pointsForCurrentQuestion.dyplomacja === 0 ? 0 : 1
                        }}>
                            {pointsForCurrentQuestion.dyplomacja > 0 ? `+${pointsForCurrentQuestion.dyplomacja}` : pointsForCurrentQuestion.dyplomacja}
                        </Text>
                    </View>
                </View>
            </View >
            <BuyCoffeeModal isVisible={isModalVisible} onClose={closeModal} />
        </ImageBackground >
    );
};

const styles = StyleSheet.create({
    dataText: {
        color: '#fff',
        marginTop: 10,
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
        height: 100,
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
        marginTop: 10,
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
        height: 250,
        resizeMode: 'cover',
        marginBottom: 20,
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
        width: 25,
        height: 25,
    }

});

export default GameBoard;
