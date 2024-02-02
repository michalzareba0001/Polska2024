import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import Coffee from '../assets/images/cup-of-drink-ico.png'

const BuyCoffeeModal = ({ isVisible, onClose, content }) => {
    return (
      <Modal isVisible={isVisible} onBackdropPress={onClose} style={styles.ModalContainer}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Text style={styles.closeBtnText}>x</Text>
            </TouchableOpacity>
            <View>
              <Text>Podoba Ci się nasza gra?</Text>
              <Text>Postaw nam kawę</Text>
              <Image source={Coffee} style={styles.coffeeImg}/>
              
            </View>
          </View>
        </View>
      </Modal>
    );
  };

export default BuyCoffeeModal

const styles = StyleSheet.create({
    ModalContainer: {
      flex: 1,

    },
    closeBtn: {
      position: 'absolute',
      top: 10,
      right: 10,
    },

    closeBtnText: {
      fontWeight: '900',
      fontSize: 20,
    },
    coffeeImg: {
      width: 200,
      height: 200,
    }
})