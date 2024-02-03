import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import Coffee from '../assets/images/cup-of-drink-ico.png'

const BuyCoffeeModal = ({ isVisible, onClose, content }) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} style={styles.ModalContainer}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '90%' }}>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Text style={styles.closeBtnText}>x</Text>
          </TouchableOpacity>
          <View style={styles.buyCoffeeView}>
            <Text style={styles.bigText}>Podoba Ci się ta gra?</Text>
            <Text style={styles.middleText}>Postaw nam kawę:</Text>
            <TouchableOpacity style={styles.buyCoffeeBtn}>
              <Image source={Coffee} style={styles.coffeeImg} />
              <Text style={styles.bigText}>3,50 zł</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>Zespół:</Text>
            <Text>Michał Zaręba</Text>
            <Text>(opis stanowiska)</Text>
            <Text>Diana Zaręba</Text>
            <Text>(opis stanowiska)</Text>
            <Text>Laura Kszczanowicz</Text>
            <Text>(opis stanowiska)</Text>
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
    right: 20,
  },

  closeBtnText: {
    fontWeight: '900',
    fontSize: 20,
  },

  buyCoffeeView: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
  },

  bigText: {
    fontSize: 20,
    fontWeight: '700'
  },

  middleText: {
    fontSize: 16,
  },

  buyCoffeeBtn: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',

  },

  coffeeImg: {
    width: 80,
    height: 80,
  }
})