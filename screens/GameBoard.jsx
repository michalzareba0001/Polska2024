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
import LowLifeModal from '../components/LowLifeModal'
import subtitles from '../data/subtitles'
//import { fadeIn } from 'react-native-reanimated'


const GameBoard = () => {
    const fadeInAnim = useRef(new Animated.Value(0)).current;
    const [finanse, setFinanse] = useState(19);
    const [popularnosc, setPopularnosc] = useState(50);
    const [obrona, setObrona] = useState(50);
    const [dyplomacja, setDyplomacja] = useState(50);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
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
            Animated.timing(fadeInAnim, {
                toValue: 1,
                duration: 1000, // Czas trwania animacji w milisekundach
                useNativeDriver: true,
            }),
            // Poczekaj 2 sekundy
            Animated.delay(2000),
            // Zanikaj animację
            Animated.timing(fadeInAnim, {
                toValue: 0,
                duration: 1000, // Czas trwania animacji zanikania w milisekundach
                useNativeDriver: true,
            }),
        ]).start();
    };


    useEffect(() => {
        // Potasuj pytania przed rozpoczęciem gry
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        setShuffledQuestions(shuffled);
        if (finanse || popularnosc || obrona || dyplomacja) {
            startAnimation();
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

    };

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <ImageBackground source={gameboardBg} style={styles.backgroundImg}>
            <View style={styles.container}>
                {/* Górna część - Pytania */}
                <View style={styles.upperSection}>
                    <LowLifeModal isVisible={isModalVisible} onClose={closeModal} content="To jest treść modala!" />

                    {currentQuestion < shuffledQuestions.length && finanse >= 1 && popularnosc >= 1 && obrona >= 1 && dyplomacja >= 1 ? (
                        <>
                            <Text style={styles.dataText}>Dzień: {currentQuestion + 1}</Text>
                            <View style={styles.ImageAndWarning}>
                                <Image source={shuffledQuestions[currentQuestion].image} style={styles.image} />
                                {finanse <= 20 && finanse > 15 && (
                                    <Animated.Text style={[styles.Warning, { opacity: fadeInAnim }]}>
                                        {subtitles[0].finanseLow[0].descText}
                                    </Animated.Text>
                                )}
                                {finanse <= 15 && finanse > 10 && (
                                    <Animated.Text style={[styles.Warning, { opacity: fadeInAnim }]}>
                                        {subtitles[0].finanseLow[1].descText}
                                    </Animated.Text>
                                )}
                                {finanse <= 10 && finanse > 5 && (
                                    <Animated.Text style={[styles.Warning, { opacity: fadeInAnim }]}>
                                        {subtitles[0].finanseLow[2].descText}
                                    </Animated.Text>
                                )}
                                {finanse <= 5 && finanse > 0 && (
                                    <Animated.Text style={[styles.Warning, { opacity: fadeInAnim }]}>
                                        {subtitles[0].finanseLow[3].descText}
                                    </Animated.Text>
                                )}
                                {popularnosc <= 20 && popularnosc > 15 && finanse > 20 && obrona > 20 && dyplomacja > 20 && (
                                    <Animated.Text style={[styles.Warning, { opacity: fadeInAnim }]}>
                                        {subtitles[0].popularnoscLow[0].descText}
                                    </Animated.Text>
                                )}
                                {popularnosc <= 15 && popularnosc > 10 && finanse > 20 && obrona > 20 && dyplomacja > 20 && (
                                    <Animated.Text style={[styles.Warning, { opacity: fadeInAnim }]}>
                                        {subtitles[0].popularnoscLow[1].descText}
                                    </Animated.Text>
                                )}
                                {popularnosc <= 10 && popularnosc > 5 && finanse > 20 && obrona > 20 && dyplomacja > 20 && (
                                    <Animated.Text style={[styles.Warning, { opacity: fadeInAnim }]}>
                                        {subtitles[0].popularnoscLow[2].descText}
                                    </Animated.Text>
                                )}
                                {popularnosc <= 5 && popularnosc > 0 && finanse > 20 && obrona > 20 && dyplomacja > 20 && (
                                    <Animated.Text style={[styles.Warning, { opacity: fadeInAnim }]}>
                                        {subtitles[0].popularnoscLow[3].descText}
                                    </Animated.Text>
                                )}
                                {obrona <= 20 && obrona > 15 && finanse > 20 && popularnosc > 20 && dyplomacja > 20 && (
                                    <Animated.Text style={[styles.Warning, { opacity: fadeInAnim }]}>
                                        {subtitles[0].obronaLow[0].descText}
                                    </Animated.Text>
                                )}
                                {obrona <= 15 && obrona > 10 && finanse > 20 && popularnosc > 20 && dyplomacja > 20 && (
                                    <Animated.Text style={[styles.Warning, { opacity: fadeInAnim }]}>
                                        {subtitles[0].obronaLow[1].descText}
                                    </Animated.Text>
                                )}
                                {obrona <= 10 && obrona > 5 && finanse > 20 && popularnosc > 20 && dyplomacja > 20 && (
                                    <Animated.Text style={[styles.Warning, { opacity: fadeInAnim }]}>
                                        {subtitles[0].obronaLow[2].descText}
                                    </Animated.Text>
                                )}
                                {obrona <= 5 && obrona > 0 && finanse > 20 && popularnosc > 20 && dyplomacja > 20 && (
                                    <Animated.Text style={[styles.Warning, { opacity: fadeInAnim }]}>
                                        {subtitles[0].obronaLow[3].descText}
                                    </Animated.Text>
                                )}
                                {dyplomacja <= 20 && dyplomacja > 15 && finanse > 20 && popularnosc > 20 && obrona > 20 && (
                                    <Animated.Text style={[styles.Warning, { opacity: fadeInAnim }]}>
                                        {subtitles[0].dyplomacjaLow[0].descText}
                                    </Animated.Text>
                                )}
                                {dyplomacja <= 15 && dyplomacja > 10 && finanse > 20 && popularnosc > 20 && obrona > 20 && (
                                    <Animated.Text style={[styles.Warning, { opacity: fadeInAnim }]}>
                                        {subtitles[0].dyplomacjaLow[1].descText}
                                    </Animated.Text>
                                )}
                                {dyplomacja <= 10 && dyplomacja > 5 && finanse > 20 && popularnosc > 20 && obrona > 20 && (
                                    <Animated.Text style={[styles.Warning, { opacity: fadeInAnim }]}>
                                        {subtitles[0].dyplomacjaLow[2].descText}
                                    </Animated.Text>
                                )}
                                {dyplomacja <= 5 && dyplomacja > 0 && finanse > 20 && popularnosc > 20 && obrona > 20 && (
                                    <Animated.Text style={[styles.Warning, { opacity: fadeInAnim }]}>
                                        {subtitles[0].dyplomacjaLow[3].descText}
                                    </Animated.Text>
                                )}
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
                            Gra zakończona. Twój wynik, finanse: {finanse}, popularność:{popularnosc}, obrona:{obrona}, dyplomacja: {dyplomacja}
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
        backgroundColor: '#ffffff', // Dodaj kolor tła, aby przypominał przycisk
        borderRadius: 10, // Zaokrąglij rogi
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
        top: '50%',
        textAlign: 'center',
        width: '100%',
        color: '#f60000',
        fontSize: 14,
        fontWeight: '600',
        textShadowColor: '#000',
        textShadowRadius: 10,
        paddingLeft: 40,
        paddingRight: 40,
    },

});

export default GameBoard;
