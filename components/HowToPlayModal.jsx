import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import FinanseIco from '../assets/images/finanse-ico.png'
import PopularnoscIco from '../assets/images/popularnosc-ico.png'
import ObronaIco from '../assets/images/obrona-ico.png'
import DyplomacjaIco from '../assets/images/dyplomacja.png'

const HowToPlayModal = ({ isVisable, onClose }) => {
    return (
        <Modal isVisible={isVisable} onBackdropPress={onClose} style={styles.ModalContainer}>
            <TouchableOpacity style={styles.closeBtn} onPress={onClose} accessibilityLabel='close button'>
                <Text style={styles.closeBtnX}>x</Text>                
            </TouchableOpacity>
            <View style={styles.upperPart}>
                <Text style={styles.title}>Zasady gry:</Text>
                <Text style={styles.description}>Aby wygrać podejmuj właściwe decyzje i dotwaj do 2026 roku. Każda decyzja ma wpływ na poniższe wskaźniki, nie pozwól im spaść do zera.</Text>
            </View>
            <View style={styles.lowerPart}>
                <View style={styles.lowerPartRow}>
                    <View style={styles.rowLeft}>
                        <Image source={FinanseIco} style={styles.catIco}/>
                    </View>
                    <View style={styles.rowRight}>
                        <Text style={styles.catName}>Finanse</Text>
                        <Text style={styles.catDesc}>"Pieniądze to nie wszystko, ale wszystko bez pieniędzy to ..." - dbaj o finanse</Text>
                    </View>
                </View>
                <View style={styles.lowerPartRow}>
                    <View style={styles.rowLeft}>
                        <Image source={PopularnoscIco} style={styles.catIco}/>
                    </View>
                    <View style={styles.rowRight}>
                        <Text style={styles.catName}>Popularność</Text>
                        <Text style={styles.catDesc}>Lud wybrał cię na to stanowisko i ten lud może cie obalić, dbaj o popularność</Text>
                    </View>
                </View>
                <View style={styles.lowerPartRow}>
                    <View style={styles.rowLeft}>
                        <Image source={ObronaIco} style={styles.catIco}/>
                    </View>
                    <View style={styles.rowRight}>
                        <Text style={styles.catName}>Obrona</Text>
                        <Text style={styles.catDesc}>Pamiętać żeby wspierać wojsko. Bez silnej armii nie ma państwa.</Text>
                    </View>
                </View>
                <View style={styles.lowerPartRow}>
                    <View style={styles.rowLeft}>
                        <Image source={DyplomacjaIco} style={styles.catIco}/>
                    </View>
                    <View style={styles.rowRight}>
                        <Text style={styles.catName}>Dyplomacja</Text>
                        <Text style={styles.catDesc}>Pozwala nawiazywać sojusze polityczne w kraju i za granicą</Text>
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
        borderTopColor: '#ffffff',
        borderTopWidth: 1,
    },

    lowerPartRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 15,
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
    },

    closeBtn: {
        position: 'absolute',
        top: 0,
        right: 5,
    },

    closeBtnX: {
        color: '#ffffff',
        fontSize: 30,
        fontWeight: '600',
    }






})