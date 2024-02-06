import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import FinanseIco from '../assets/images/finanse-ico.png'
import PopularnoscIco from '../assets/images/popularnosc-ico.png'
import ObronaIco from '../assets/images/obrona-ico.png'
import DyplomacjaIco from '../assets/images/dyplomacja.png'

const HowToPlayModal = ({ isVisable, onClose }) => {
    return (
        <Modal isVisible={isVisable} onBackdropPress={onClose} style={styles.ModalContainer}>
            <View style={styles.upperPart}>
                <Text style={styles.title}>Zasady gry:</Text>
                <Text style={styles.description}>Aby wygrać dotwaj do 2026 roku i nie pozwól aby któryś ze wskaźników spadł do zera</Text>
            </View>
            <View style={styles.lowerPart}>
                <View style={styles.lowerPartRow}>
                    <View style={styles.rowLeft}>
                        <Image source={FinanseIco} style={styles.catIco}/>
                    </View>
                    <View style={styles.rowRight}>
                        <Text style={styles.catName}>Finanse</Text>
                        <Text style={styles.catDesc}>Finanse opis</Text>
                    </View>
                </View>
                <View style={styles.lowerPartRow}>
                    <View style={styles.rowLeft}>
                        <Image source={PopularnoscIco} style={styles.catIco}/>
                    </View>
                    <View style={styles.rowRight}>
                        <Text style={styles.catName}>Popularność</Text>
                        <Text style={styles.catDesc}>Finanse opis</Text>
                    </View>
                </View>
                <View style={styles.lowerPartRow}>
                    <View style={styles.rowLeft}>
                        <Image source={ObronaIco} style={styles.catIco}/>
                    </View>
                    <View style={styles.rowRight}>
                        <Text style={styles.catName}>Obrona</Text>
                        <Text style={styles.catDesc}>Finanse opis</Text>
                    </View>
                </View>
                <View style={styles.lowerPartRow}>
                    <View style={styles.rowLeft}>
                        <Image source={DyplomacjaIco} style={styles.catIco}/>
                    </View>
                    <View style={styles.rowRight}>
                        <Text style={styles.catName}>Dyplomacja</Text>
                        <Text style={styles.catDesc}>Finanse opis</Text>
                    </View>
                </View>
            </View>
        </Modal >
    )
}

export default HowToPlayModal

const styles = StyleSheet.create({
    ModalContainer: {
        flex: 1,
    },

    upperPart: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        color: '#F60000',
        fontSize: 24,
        fontWeight: '700',
        paddingBottom: 20,
    },

    description: {
        color: '#ffffff',
        fontSize: 16,
        paddingBottom: 20,
    },

    lowerPart: {
        width: '100%',
    },

    lowerPartRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
    },

    rowLeft: {
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    rowRight: {
        width: '70%',
    },

    catIco: {
        width: 50,
        height: 50,
    },

    catName: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },

    catDesc: {
        color: '#ffffff',
    }





})