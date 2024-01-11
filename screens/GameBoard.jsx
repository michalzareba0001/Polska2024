import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import questions from '../data/questions';
import gameboardBg from '../assets/images/gameboardBg.jpg';
import finanseIco from '../assets/images/finanse-ico.png';
import popularnoscIco from '../assets/images/popularnosc-ico.png';
import obronaIco from '../assets/images/obrona-ico.png';
import dyplomacjaIco from '../assets/images/dyplomacja.png';

const GameBoard = () => {
    const [finanse, setFinanse] = useState(50);
    const [popularnosc, setPopularnosc] = useState(50);
    const [obrona, setObrona] = useState(50);
    const [dyplomacja, setDyplomacja] = useState(50);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [pointsForCurrentQuestion, setPointsForCurrentQuestion] = useState({
        finanse: 0,
        popularnosc: 0,
        obrona: 0,
        dyplomacja: 0,
    });

    useEffect(() => {
        // Potasuj pytania przed rozpoczęciem gry
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        setShuffledQuestions(shuffled);
    }, []);

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
    };

    return (
        <ImageBackground source={gameboardBg} style={styles.backgroundImg}>
            <View style={styles.container}>
                {/* Górna część - Pytania */}
                <View style={styles.upperSection}>
                    {currentQuestion < shuffledQuestions.length ? (
                        <>
                            <Text style={styles.dataText}>Dzień: {currentQuestion + 1}</Text>
                            <Image source={shuffledQuestions[currentQuestion].image} style={styles.image} />
                            <Text style={styles.questionText}>{shuffledQuestions[currentQuestion].questionText}</Text>
                            {shuffledQuestions[currentQuestion].answers.map((answer, index) => (
                                <TouchableOpacity style={styles.answerBtn} key={index} onPress={() => handleAnswer(answer.points)}>
                                    <Text style={styles.answerBtnText}>{answer.text}</Text>
                                </TouchableOpacity>
                            ))}
                            {/* Wyświetl punkty zdobyte w aktualnym pytaniu */}
                            <Text style={styles.scoreDiff}>
                                Punkty w pytaniu: Finanse - {pointsForCurrentQuestion.finanse}, Popularność - {pointsForCurrentQuestion.popularnosc}, Obrona - {pointsForCurrentQuestion.obrona}, Dyplomacja - {pointsForCurrentQuestion.dyplomacja}
                            </Text>
                        </>
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
                        <Text style={styles.scoreDiff}>{pointsForCurrentQuestion.finanse}</Text>
                    </View>
                    <View style={styles.pictureContainer}>
                        <Image source={popularnoscIco} style={styles.scoreIcon} />
                        <Text style={styles.lowerSectionText}>{popularnosc}%</Text>
                        <View style={{ height: `${popularnosc}%`, 
                        backgroundColor: '#ffffff70', 
                        position: 'absolute', 
                        bottom: 0, 
                        left: 0, 
                        width: '100%', 
                        opacity: 0.9 }}>
                        </View>
                        <Text style={styles.scoreDiff}>{pointsForCurrentQuestion.popularnosc}</Text>
                    </View>
                    <View style={styles.pictureContainer}>
                        <Image source={obronaIco} style={styles.scoreIcon} />
                        <Text style={styles.lowerSectionText}>{obrona}%</Text>
                        <View style={{ height: `${obrona}%`, 
                        backgroundColor: '#ffffff80', 
                        position: 'absolute', 
                        bottom: 0, 
                        left: 0, 
                        width: '100%', 
                        opacity: 0.9 }}>
                        </View>
                        <Text style={styles.scoreDiff}>{pointsForCurrentQuestion.obrona}</Text>
                    </View>
                    <View style={styles.pictureContainer}>
                        <Image source={dyplomacjaIco} style={styles.scoreIcon} />
                        <Text style={styles.lowerSectionText}>{dyplomacja}%</Text>
                        <View style={{ height: `${dyplomacja}%`, backgroundColor: '#ffffff70', position: 'absolute', bottom: 0, left: 0, width: '100%', opacity: 0.9 }}>
                        </View>
                        <Text style={styles.scoreDiff}>{pointsForCurrentQuestion.dyplomacja}</Text>
                    </View>
                </View>
            </View >
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    dataText: {
        color: '#fff',
        marginTop: 5,
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

    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        marginBottom: 30,
        marginTop: 30,
    },

    answerBtn: {
        width: '95%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        padding: 10,
        backgroundColor: '#ffffff', // Dodaj kolor tła, aby przypominał przycisk
        borderRadius: 10, // Zaokrąglij rogi
        borderColor: '#F60000',
        borderWidth: 1,
    },

    answerBtnText: {
        fontSize: 13,
        color: '#000000',
        fontWeight: '700',
    },

    questionText: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 20,
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

    }
});

export default GameBoard;
