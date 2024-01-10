import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import questions from '../data/questions';
import gameboardBg from '../assets/images/gameboardBg.jpg'
import finanseIco from '../assets/images/finanse-ico.png'
import popularnoscIco from '../assets/images/popularnosc-ico.png'
import obronaIco from '../assets/images/obrona-ico.png'
import dyplomacjaIco from '../assets/images/dyplomacja.png'

const GameBoard = () => {
    const [finanse, setFinanse] = useState(50);
    const [popularnosc, setPopularnosc] = useState(50);
    const [obrona, setObrona] = useState(50);
    const [dyplomacja, setDyplomacja] = useState(50);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);

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
                                <TouchableOpacity
                                    style={styles.answerBtn}
                                    key={index}
                                    onPress={() => handleAnswer(answer.points)} >

                                    <Text style={styles.answerBtnText}>{answer.text}</Text>

                                </TouchableOpacity>
                            ))}
                        </>
                    ) : (
                        <Text style={styles.endGameText}>Gra zakończona. Twój wynik, finanse: {finanse}, popularność:{popularnosc}, obrona:{obrona}, dyplomacja: {dyplomacja}</Text>
                    )}

                </View>

                {/* Dolna część - Wynik */}
                <View style={styles.lowerSection}>
                    <View style={styles.pictureContainer}>
                        <Image source={finanseIco} style={styles.scoreIcon}/>
                        <View style={{ height: `${finanse}%`, backgroundColor: '#9F0000', position: 'absolute', bottom:0, left:0, width:'100%', opacity: 0.9}}>
                            <Text style={styles.lowerSectionText}>Finanse: {finanse}</Text>
                        </View>
                    </View>

                    <View style={styles.pictureContainer}>
                    <Image source={popularnoscIco} style={styles.scoreIcon}/>
                        <View style={{ height: `${popularnosc}%`, backgroundColor: '#9F0000', position: 'absolute', bottom:0, left:0, width:'100%', opacity: 0.9 }}>
                            <Text style={styles.lowerSectionText}>Popularność: {popularnosc}</Text>
                        </View>
                    </View>
                    <View style={styles.pictureContainer}>
                    <Image source={obronaIco} style={styles.scoreIcon}/>
                        <View style={{ height: `${obrona}%`, backgroundColor: '#9F0000', position: 'absolute', bottom:0, left:0, width:'100%', opacity: 0.9 }}>
                            <Text style={styles.lowerSectionText}>Obrona: {obrona}</Text>
                        </View>
                    </View>
                    <View style={styles.pictureContainer}>
                    <Image source={dyplomacjaIco} style={styles.scoreIcon}/>
                        <View style={{ height: `${dyplomacja}%`, backgroundColor: '#9F0000', position: 'absolute', bottom:0, left:0, width:'100%', opacity: 0.9 }}>
                            <Text style={styles.lowerSectionText}>Dyplomacja: {dyplomacja}</Text>
                        </View>
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
        borderTopWidth: 1,
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
        justifyContent: 'flex-end',
    },

    lowerSectionText: {
        fontSize: 12,
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
        width: '80%',
        height: 90,
        zIndex: 500,
        alignSelf: 'center',
        opacity: 0.7,
    }
});

export default GameBoard;
