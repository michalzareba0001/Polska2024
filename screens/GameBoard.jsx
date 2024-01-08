import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import questions from '../data/questions';

const GameBoard = () => {
    const [finanse, setFinanse] = useState(0);
    const [popularnosc, setPopularnosc] = useState(0);
    const [obrona, setObrona] = useState(0);
    const [dyplomacja, setDyplomacja] = useState(0);
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
        <View style={styles.container}>
            {/* Górna część - Pytania */}
            <View style={styles.upperSection}>
                {currentQuestion < shuffledQuestions.length ? (
                    <>
                        <Image source={shuffledQuestions[currentQuestion].image} style={styles.image} />
                        <Text style={styles.questionText}>{shuffledQuestions[currentQuestion].questionText}</Text>
                        {shuffledQuestions[currentQuestion].answers.map((answer, index) => (
                            <TouchableOpacity
                                style={styles.answerBtn}
                                key={index}
                                onPress={() => handleAnswer(answer.points)} >
                                
                                <Text>{answer.text}</Text>
                            
                            </TouchableOpacity>
                        ))}
                    </>
                ) : (
                    <Text style={styles.endGameText}>Gra zakończona. Twój wynik, finanse: {finanse}, popularność:{popularnosc}, obrona:{obrona}, dyplomacja: {dyplomacja}</Text>
                )}
            </View>

            {/* Dolna część - Wynik */}
            <View style={styles.lowerSection}>
                <Text>Finanse: {finanse}</Text>
                <Text>Popularność: {popularnosc}</Text>
                <Text>Obrona: {obrona}</Text>
                <Text>Dyplomacja: {dyplomacja}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
    },

    upperSection: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    lowerSection: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        alignItems: 'center',
    },

    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        marginBottom: 30,
        marginTop: 30,
    },

    answerBtn: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#ddd', // Dodaj kolor tła, aby przypominał przycisk
        borderRadius: 5, // Zaokrąglij rogi
    },

    questionText: {
        fontSize: 18,
        marginBottom: 20,
    },

    endGameText: {
        marginTop: '50%',
    }
});

export default GameBoard;
